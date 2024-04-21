const ytdl = require(__dirname + "\\ytdl-core-discord");
const ytdl_core = require("@distube/ytdl-core");
const {ChatInputCommandInteraction, VoiceChannel} = require('discord.js');
const voice = require("@discordjs/voice");
const prism = require('prism-media');
const borken = require(__dirname + "\\borken.js");
const had = require(__dirname + "\\haddock.js");

const waitTime = 10000; //ms

const fancyGuilds = ["1156580743737262100", "231939504162734080"]

var queue = [];
var state = null;
var currentSong = null;

var commandChannel = null;
var currentMessage = null;



connection = null;
soundPlayer = voice.createAudioPlayer( {
    behaviors: {
        noSubscriber: voice.NoSubscriberBehavior.Play
    }
});

module.exports = {
    play,
    add,
    skip,
    stop

};


soundPlayer.on(voice.AudioPlayerStatus.Playing, () =>  {
    state = voice.AudioPlayerStatus.Playing; 
    console.log("Playing?");
});

soundPlayer.on(voice.AudioPlayerStatus.Buffering , () =>  {
    state = voice.AudioPlayerStatus.Buffering; 
    console.log("Buffering?");
});

soundPlayer.on(voice.AudioPlayerStatus.Idle , () =>  {
    if(queue.length > 0) {
        const next = queue.shift();
        currentSong = next;
        play(next.url, null, true);
    } else {
        if(currentMessage != null) {
            currentMessage.delete();
            currentMessage = null;
        }
    }
    state = voice.AudioPlayerStatus.Idle; 
    console.log("Idle?");
});

soundPlayer.on(voice.AudioPlayerStatus.AutoPaused , () =>  {
    console.log("Autopause?");
});

soundPlayer.on("error", error => {
	console.error("Soundplayer error: " + error);
});

async function play(url, interaction, fromQueue) {
    if(url === null) {
        interaction.followUp({content: "Ge mig en länk, " + had.dock()}).then(setTimeout(() => clearReply(interaction), waitTime));
        return;
    }
    if(connection == null) {
        if(!await joinChannel(interaction)) return;
    }
    if(state != null && state != voice.AudioPlayerStatus.Idle && !fromQueue) {
        add(url, interaction);
        return;
    }
    var title;
    const parts = url.split(".");
    if(!fromQueue) {
        const info = await ytdl_core.getBasicInfo(url);
        currentSong = {url: url, info: info}
    }
    if(parts.length > 1 && parts[1] === "mp3") {
        const audio = voice.createAudioResource(url);
        title = url;
        soundPlayer.play(audio);
    } else {
        const audio = voice.createAudioResource(await ytdl(url, {
            filter: 'audioonly',
            fmt: 'mp3',
            highWaterMark: 1 << 30,
            liveBuffer: 20000,
            dlChunkSize: 4096,
            bitrate: 128,
            quality: 'lowestaudio'
        }).catch(error => {
            console.log("ytdl-core-discord: " + error);
        }), {inputType: 'opus', inlineVolume: true})
        soundPlayer.play(audio);
    }
    if(interaction != null) {
        await interaction.followUp({content: "Lade till " + currentSong.info.videoDetails.title + " till kön", ephemeral: false}).then(setTimeout(() => clearReply(interaction), waitTime));
    }
    if(currentMessage == null) {
        if(fancyGuilds.includes(interaction.guildId)) {
            var channel = interaction.channel;
            channel.send({content: "Spelar " + currentSong.info.videoDetails.title}).then(message => {
                currentMessage = message;
            });

        }
    } else {
        await updateQueueText();
    }
    return;
};


async function add(url, interaction) {
    const info = await ytdl_core.getBasicInfo(url);
    if(state == voice.AudioPlayerStatus.Idle || state == null) {
        currentSong = {url: url, info: info};
        play(url, interaction, true);
    } else {
        queue.push({url: url, info: info});
        
        await interaction.followUp({content: "Lade till " + info.videoDetails.title + " till kön", ephemeral: false}).then(setTimeout(() => clearReply(interaction), waitTime));
        await updateQueueText();
    }
}

async function updateQueueText() {
    if(currentMessage != null) {
        let list = "Spelar " + currentSong.info.videoDetails.title;
        if(queue.length > 0) {
            list += "\nI kö:\n";
            for(let i = 0; i < queue.length; i++) {
                list += ("  " + queue[i].info.videoDetails.title + "\n"); 
            }
        }
        
        await currentMessage.edit(list);
    }
    return;
}

async function skip(interaction) {
    soundPlayer.stop();
    const next = queue.shift();
    if(next != null) {
        play(next.url, interaction, true);
    } else {
        await interaction.followUp({content: "Finns inget att skippa " + had.dock(), ephemeral: false}).then(setTimeout(() => clearReply(interaction), waitTime));
    }
    return;
}

async function stop(interaction) {
    await interaction.followUp({content: "Nuttar", ephemeral: false, tts: false}).then(setTimeout(() => clearReply(interaction), waitTime));
    soundPlayer.stop();
    connection.disconnect();
    connection.destroy();
    connection = null;
    queue = [];
    commandChannel = null;

    return;
}

async function joinChannel(interaction) {
    user = await interaction.member.guild.members.fetch(interaction.user.id);
    channel = user.voice.channel;
    if(!channel.isVoiceBased()) {
        await borken.cat(channel.name + "is not a voice channel", interaction);
        return false;
    }
    connection = voice.joinVoiceChannel({channelId: channel.id, guildId: channel.guild.id, adapterCreator: channel.guild.voiceAdapterCreator, selfDeaf: false, selfMute: false});
    connection.subscribe(soundPlayer);
    return true;
}

async function clearReply(interaction) {
    if(interaction.reply != null) {
        interaction.deleteReply().catch(error => {
            console.log("clearReply: " + error);
        });
    }
}