//const = require("discord.js");
const { Client, Events, GatewayIntentBits } = require('discord.js');
const config = require("./auth.json");
const fs = require('fs');
const ytdl = require('ytdl-core');
var gaffla;
var botten;
var tyst;
var dungeon;
const price = "https://www.youtube.com/watch?v=G8iOmVd1W_g";
const spook = "https://www.youtube.com/watch?v=eVrYbKBrI7o";
const cheeki = "https://www.youtube.com/watch?v=JsWwMTuG4NA";
const uwu = "https://www.youtube.com/watch?v=ptw2Cor2HQM&feature=youtu.be";
const nuzzle = "https://www.youtube.com/watch?v=h6DNdop6pD8";
const cummies = "https://www.youtube.com/watch?v=CxVDnpsGTZY";
const huggies = "https://www.youtube.com/watch?v=I17QjIC6QJw&feature=youtu.be";
const portal = "https://www.youtube.com/watch?v=mD3v1B_aXw0";
const longPortal = "https://www.youtube.com/watch?v=s-UFPhz2nZ0&t";
const boiborton = "https://www.youtube.com/watch?v=SAZzpaWpGIA";
const seinfeld = "https://www.youtube.com/watch?v=_V2sBURgUBI";
const seindfeldRape = "https://www.youtube.com/watch?v=bea9aFBGuwQ&feature=youtu.be";
const enthusiasm = "https://www.youtube.com/watch?v=Ag1o3koTLWM&feature=youtu.be";
const fuck = "https://www.youtube.com/watch?v=TXK03FHVsHk";
const cummotion = "https://www.youtube.com/watch?v=j0lN0w5HVT8";
const myanee = "https://www.youtube.com/watch?v=ppjdSw8sWBg";
const march = "https://www.youtube.com/watch?v=-bzWSJG93P8";
const kitchen = "https://www.youtube.com/watch?v=SFtLvkqHIds";
const sauce = "https://www.youtube.com/watch?v=uW6nkqUmnYU";
const imout = "https://www.youtube.com/watch?v=5FjWe31S_0g";
const succ = "https://www.youtube.com/watch?v=qFchpvKpYm0";
const nice = "https://www.youtube.com/watch?v=PMbYzSLLbRE";
const mandarin = "https://www.youtube.com/watch?v=-cYBOGo0ptk&feature=youtu.be";
const crumpin = "https://www.youtube.com/watch?v=wPbaNQ7RKPM&feature=youtu.be";
const spook2 = "https://www.youtube.com/watch?v=8ujGHnVCnM8";
const timLjud = "https://www.youtube.com/watch?v=VKMw2it8dQY";
const JuWUl = "https://www.youtube.com/watch?v=Pk1I8uEMrP8";
const fucked = "https://www.youtube.com/watch?v=ptw2Cor2HQM&feature=youtu.be";
//const coom = "https://www.youtube.com/watch?v=IL1bityU5DA";
const drill = "https://www.youtube.com/watch?v=zjnJk5V9nSM&feature=youtu.be";
const inga = "inga.mp3";
const carrahagerLjud = "https://www.youtube.com/watch?v=0NoTdUy_vhM&feature=youtu.be";
const kittenLjud = "https://www.youtube.com/watch?v=zFjkteBnYHw";
const simpanLjud = "https://www.youtube.com/watch?v=2EeW_XhpS2Q";

const emmaLjud = "https://www.youtube.com/watch?v=Gb2jGy76v0Y";
const loweLjud = "https://www.youtube.com/watch?v=FecMobXqomM";
const MPLjud = "https://www.youtube.com/watch?v=tlG_WVOOPOg";
const bomlerLjud = "https://www.youtube.com/watch?v=7nQ2oiVqKHw";

const karlsson = "140204591521333248";
const niklas = "214496518692929537";
const botID = "423191655135313930";
const tim = "232210408440725504";
const bomler = "169869738501996545";
const emma = "513052761194233866";
const lowe = "174063444109033472";
const MP = "260786692493934593";
const carrahager = "109009038368350208";
const kitten = "320120716760449025";
const simpan = "238257602499313664";

//Textkanalen där bob godkänner kommandon
//const barkerId = "356512246039576597";
const barkerVoice = "361901122111275018";
const barkerId = "1156580744177660008";

const cats = ["sadcat1.jpg", "sadcat2.png", "sadcat3.jpg", "sadcat4.jpg", "sadcat5.jpg", "sadcat6.jpg", "sadcat7.jpg", "sadcat8.jpg", "sadcat9.jpg", "sadcat10.jpg", "sadcat11.png"];
const list = ["!nutted", "!cum", "!spook", "!blyat", "!huggies", "!owo", "!cummies", "!boi", "!radio", "!kittn", "!seinfeld", "!curb", "!fuck", "!retarded", "!cummotion", "!succ", "!nice", "!mandarin", "!crump", "!gay", "!juwul", "!coom", "!uwu", "!shitdrill", "!play", "!flås", "!inga"];
const julen = ["https://www.youtube.com/watch?v=zjnJk5V9nSM&feature=youtu.be", "https://www.youtube.com/watch?v=MgIwLeASnkw&feature=youtu.be", "https://www.youtube.com/watch?v=PIkA_cUpKl8&feature=youtu.be", "https://www.youtube.com/watch?v=2QDzwBy55Uk&feature=youtu.be", "https://www.youtube.com/watch?v=n4VsfRc2IjE&feature=youtu.be", "https://www.youtube.com/watch?v=8JBHjDEHBFo&feature=youtu.be", "https://www.youtube.com/watch?v=AU85slFVskA&feature=youtu.be", "https://www.youtube.com/watch?v=iWcve_5apj0", "https://www.youtube.com/watch?v=JdbTlhKDxEI&feature=youtu.be"];

const server = [["Utmärkt val av memé, får jag rekommendera ", " som passar väl till "], ["Till denna memé vill jag föreslå ", ", det bör passa till "], ["Ypperligt val, ", ", bör fungera alldeles utmärkt till "]];
const viner = ["Vino tinto, ett rödvin", "Catch & Release, ett fruktigt vitt vin", "Chablis Le Finage, en utmärkt Chardonnay", "Alma Do Tejo, ett fruktikt rödvin", "Castillo de Gredos, högsta APK i klassen år 2008", "Mucho Tempranillo, studentens bästa rödvin", "Stone Valley Shiraz, billigt rödvin", "Castelforte Soave, ett torrt vitt vin", "Mauro, ett saftigt Chardonnay", "Warburn Estate Vermentino, studentens bästa vita vin", "Protocolo Blanco, ett utsökt spanskt vin", "Porca de Murça, ett fruktigt vitt vin", "Earthbound, ett sydafrikanskt Chenin Blanc", "Special Brew, studentens bästa öl", "Pasqua Nero d'Avola, en saftig Shiraz", "Znovín, ett tjeckiskt Svatovavrinecké-Saint Laurent", " Piaso, en trevlig Rosso", "Max Mann, en stark Pinot Noir", "Sud, ett mörkt Negroamaro"]

// Initialize Discord Bot
const bot = new Client({ intents: [GatewayIntentBits.Guilds] });
playing = false;
playingChannel = null;
player = null;
wild = false;
afking = false;
avflås = false;

latestMessage = {id:0};

queue = [];
usingQueue = false;

bot.on("guildMemberAdd", (member) => {
	member.setNickname("Engelsk Buljong");
})

bot.on("ready", () => {
	console.log("Skrothög startad");
	bot.user.set
	bot.user.setActivity("The price is right!",);
	main_text = bot.channels.fetch("393524747033640971");
	//gaffla =  bot.channels.fetch("816793756262989864");
	//kanal = bot.channels.fetch("541219041776500747");
	//vanlig = bot.channels.get("238365174132768769");
	barker = bot.channels.fetch("356512246039576597");
	dungeon = bot.channels.fetch("232132607104647168");

	bot.on(Events.MessageCreate, msg => {
		console.log("Here?");
		//ignore anything that might not be command
		if(msg.content.charAt(0) !== "!") {
			return;
		}
		//Ignore the bot
		if(msg.author.id === botID) {
			return;
		}
		logdata = "MSG: " + msg.author.username + " wrote: " + msg.content + ", ID: " + msg.id;
		console.log(logdata);
		if(msg.channel.type === 'dm' && (msg.author.id === niklas || msg.author.id === karlsson)) {
			cmd = msg.content.split(" ");
			if(msg.content === "!stop") {
				try {
					playingChannel.leave()
				} catch (error) {
					borkencat(error);
				}
				playing = false;
				wild = false;
				afking = false;
				if(player !== null) {
					player.end();
				}

				player = null;
				queue = [];
			} else if(msg.content === "!march") {
				channel = bot.channels.get("1156638894993973282");
				playing = true;
				soundplayer(march, channel);
			} else if (msg.content === "!afk") {
				afking = true;
				afkPlayer()
			} else if (msg.content === "!mute") {
				mars = bot.guilds.get("816793756262989864").fetchMember(niklas).then(member => {
					member.setDeaf(false);
					member.setMute(false);
				})
			}
			else if (msg.content === "!flås") {
				mars = bot.guilds.get("816793756262989864").fetchMember(bomler).then(member => {
					member.setMute(true);
					member.send("Du flåsade");
					avflås = true;
					setTimeout(() => {
						mars = bot.guilds.get("816793756262989864").fetchMember(bomler).then(member => {
							member.setMute(false);
							avflås = false;
						})

					} , 15000);
				}).catch(function () {
					borkencat();
				});
			
			} else if (msg.content === "!ban") {
				banhammer(msg);
			} else if (msg.content === "!vin") {
				vinval(msg);
			} else if (msg.content === "!test") {
				//fetcher();
			} else if (cmd[0] === "!test") {
				if(playing) {
					if(cmd.length > 1) {
						queue.push(cmd[1]);
						//msg.channel.send("Added song from " + msg.author.username);
						msg.reply("Added song from " + msg.author.username);
					}
					 
				} else {
					if(cmd.length > 1){
						playing = true;
						channel = bot.channels.get("613738899302383636")
						soundplayer(cmd[1], channel)
					}
				}
			}
		} else {
			if(msg.id !== latestMessage.id){
				latestMessage = msg;
			} else {
				console.log("Det hände igen: ID " + msg.id);
				return;
			}
			cmd = msg.content.split(" ");
			if(list.includes(msg.content) || list.includes(cmd[0])) {
				if(msg.member.voiceChannel === undefined) {
					msg.reply("You are not in a channel, " + haddock());
					return;
				}
				else if (msg.channel.id !== barkerId) {
					playing = false;
					gestapo(msg);
					return;

				}
			}

			// I know a switch-case would be perfect for this, but i'm too lazy to change it now

			channel = msg.member.voiceChannel;
			if (msg.content === '!cum') {
				if(playing) {
					msg.reply("I can only !cum so much!");
				} else {
					playing = true;
					soundplayer(price, channel);
					//vinval(msg);
				}
	
			}
			else if(msg.content === "!huggies") {
				if(playing) {
					msg.reply("Not done pouncing somebody else, UWU <3");
				} else {
					playing = true;
					soundplayer(huggies, channel);
					//vinval(msg);
				}
			}
			else if(msg.content === "!nutted") {
				if(wild) {
					msg.reply(" wants to get off Mrs. GLaDOS wild ride!");
				}
				else if(playing) {
					//msg.channel.send({files: ['nutted.png']})
					try {
						player.end();
					} catch (error) {
						msg.reply("Jag vet inte vad ni gjort, men det här ska inte kunna ske....")
						playing = false;
						borkencat(error);
					}
					//playing = false;
				} else {
					playing = false;
					msg.reply("Can't nut if I haven't started");
				}
			}
			else if(msg.content === "!spook") {
				if(playing) {
					msg.reply("I don't want to spook you too much!");
				} else {
					playing = true;
					//vinval(msg);
					if(halfNhalf()) {
						soundplayer(spook2, channel);
					} else {
						soundplayer(spook , channel);
					}
					
				}
			}
			else if(msg.content === "!blyat") {
				if(playing) {
					msg.reply("Я могу сделать только одну вещь одновременно, сука");
				} else {
					playing = true;
					soundplayer(cheeki, channel);
					//vinval(msg);
				}
			}
			else if(msg.content === "!owo") {
				msg.channel.send("*Notices bulge* OwO What's this?", {tts:true})
			}
			else if(msg.content === "!nuzzle") {
				if(playing) {
					msg.reply("Pwease don't pweassuwe me  （งΦ Д Φ）ง");
				} else {
					playing = true;
					soundplayer(nuzzle, channel);
					//vinval(msg);
				}
			}
			else if (msg.content === "!cummies") {
				if(playing) {
					msg.reply("The cummies are not done yet, daddy XD");
				} else {
					playing = true;
					soundplayer(cummies, channel);
					//vinval(msg);
				}
			}
			else if (msg.content === "!boi") {
				if(playing) {
					msg.reply("I'm a-a-am already cummy cummied, do I need boiborton to play more?! OwO");
				} else {
					playing = true;
					soundplayer(boiborton, channel);
					//vinval(msg);
				}
			}
			else if (msg.content === "!radio") {
				if(playing) {
				msg.reply("Testing has to finish before you can come. Science has now validated your birth mother's decision to abandon you on a doorstep.");
			} else {
				playing = true;
				//vinval(msg);
				if(wildride()) {
						wild = true;
						msg.reply("Welcome to Mrs. GLaDOS wild ride. There is no stopping it...");
						soundplayer(longPortal, channel);
				} else {
						soundplayer(portal, channel);
				}
			}
	
			}
			else if (msg.content === "!kittn") {
				msg.channel.send("Benjicanine: @Razorkittn I don't think you know the definition of yiff");
			}
			else if (msg.content === "!seinfeld") {
				if(playing) {
					msg.reply("Please slow down on the bad jokes");
				} else {
					playing = true;
					//vinval(msg);
					latestMessage = msg;
					if(wildride()) {
						soundplayer(seindfeldRape, channel);
					} else {
						soundplayer(seinfeld, channel);
					}
				}
			}
			else if (msg.content === "!curb") {
				if(playing) {
					msg.reply("Please curb you enthusiasm");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(enthusiasm, channel);
				}
			}
			else if (msg.content === "!fuck") {
				if(playing) {
					msg.reply("I can't be fucked since my fucks ran off");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(fuck, channel);
				}
			}
			else if (msg.content === "!retarded") {
				message = "Since you are too retarded to remember what I can do, here is the list: \n";
				for(i = 0; i < list.length; i++) {
					message = message + list[i] + "\n";
				}
				msg.channel.send(message)
			}
			else if (msg.content === "!cummotion") {
				if (playing) {
					msg.reply("Bees are making Honey, I can't currently make Cummy")
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(cummotion, channel);
				}
			}
			else if (msg.content === "!gay") {
				if(playing) {
					msg.reply("I turned this into a command now. Want to see what it is? ")
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(myanee, channel);
				}
			}
			else if (msg.content === "!succ") {
				if(playing) {
					msg.reply("Already succing somebody that actually matters");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(succ, channel);
				}
			} 
			else if (msg.content === "!nice") {
				if(playing) {
					msg.reply("This is not noice");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(nice, channel);
				}
			} 
			else if (msg.content === "!mandarin") {
				if(playing) {
					msg.reply("\*slurping sounds\*");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(mandarin, channel);
				}
			} 
			else if (msg.content === "!crump") {
				if(playing) {
					msg.reply("Don't worry dear, I will crump with you soon");
				} else 
				{
					playing = true;
					//vinval(msg);
					soundplayer(crumpin, channel);
				}
			}
			else if (msg.content === "!juwul") {
				if(playing) {
					msg.reply("You hit jackpot, banhammer will hit.");
				} else 
				{
					playing = true;
					//vinval(msg);
					soundplayer(JuWUl, channel);
				}
			}
			else if (msg.content === "!jul") {
				if(playing) {
					msg.reply("Take it easy, christmas will come soon!");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(songs(), channel);
				
				}
			}
			else if (msg.content === "!coom") {
				//msg.reply("RIP coom");
				msg.reply("Jag är ledsen, men vi serverar inte döda saker");
			}
			else if (msg.content === "!uwu") {
				if(playing) {
					msg.reply("This shit is so fuicked, I love it and it must be here. I'm drunk while making this");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(uwu, channel);
				}
			} else if(msg.content === "!karlsson") {
				mars = bot.guilds.get("816793756262989864").fetchMember(karlsson).then(member => {
					//member.voiceChannel.
				})
			}
			else if (msg.content === "!flås") {
				mars = bot.guilds.get("816793756262989864").fetchMember(bomler).then(member => {
					if(avflås) {
						msg.reply("Inga ledsna katter här, hörru!")
					} else {
						member.setMute(true);
						member.send("Du flåsade");
						avflås = true;
						setTimeout(() => {
							mars = bot.guilds.get("816793756262989864").fetchMember(bomler).then(member => {
								member.setMute(false);
								avflås = false;
							}).catch((e) => {
								borkencat()
								console.log("Kunde inte avflåsa Bomler")
								avflås = false;
							})
	
						} , 7000);
					}

				}).catch((e) => {
					borkencat()
					console.log("Kunde inte hitta bomler")
					avflås = false;
				})
			
			}
			else if(msg.content.toLowerCase() === "!shitdrill") {
				if(playing) {
					msg.reply("I can't play it, because of THIS SHIT DRILL");
				} else {
					playing = true;
					//vinval(msg);
					soundplayer(drill, channel);
				}
			}
			else if(msg.content.toLowerCase() === "!inga") {
				if(playing) {
					msg.reply("Någon annan sprutar på mig just nu ;)");
				} else {
					playing = true;
					//vinval(msg);
					mp3Player(inga, channel);
				}

			}
			else if (cmd[0] === "!playa") {
				if(playing) {
					if(cmd.length > 1) {
						if(ytdl.validateURL(cmd[1])) {
							usingQueue = true;
							queue.push(cmd[1]);
							msg.channel.send("Added song from " + msg.author.username);
						}

					}
					 
				} else {
					if(cmd.length > 1){
						if(ytdl.validateURL(cmd[1])) {
							usingQueue = true;
							playing = true;
							//vinval(msg);
							soundplayer(cmd[1], channel)
						}
					}

				}

			}
		}
		
	})
	//For playing certain things when certain people join
	bot.on('voiceStateUpdate', (oldMember, newMember) => {
		//console.log(oldMember);
		user = newMember.user;
		if(user.id === karlsson) {
			if(wildride()) {
				checkWhenJoin(oldMember, newMember, sauce);
			} else {
				checkWhenJoin(oldMember, newMember, kitchen);
			}
		} else if (user.id === tim) {
			checkWhenJoin(oldMember, newMember, timLjud);
		} else if (user.id === emma) {
			checkWhenJoin(oldMember, newMember, inga);
		} else if (user.id === lowe) {
			checkWhenJoin(oldMember, newMember, loweLjud);
		} else if (user.id === MP) {
			checkWhenJoin(oldMember, newMember, MPLjud);
		} else if (user.id === bomler) {
			checkWhenJoin(oldMember, newMember, bomlerLjud);
		//} else if (user.id === carrahager) {
		//	checkWhenJoin(oldMember, newMember, carrahagerLjud);
		} else if (user.id === kitten) {
			checkWhenJoin(oldMember, newMember, kittenLjud);
		} else if (user.id === simpan) {
			checkWhenJoin(oldMember, newMember, simpanLjud);
		}
	});
});

function fetcher() {
	tmp = bot.fetchUser("169869738501996545");
	console.log(tmp);
}

function vinval(msg) {
	meddelande = server[Math.floor(Math.random() * server.length)];
	vin = viner[Math.floor(Math.random() * viner.length)];
	if(msg.content.split(" ").length > 1) {
		msg.reply(meddelande[0] + vin + meddelande[1] + "Allehanda skumma videor");
	} else {
		msg.reply(meddelande[0] + vin + meddelande[1] + msg.content);
	}
	
}

function banhammer(msg) {
	//guilden = msg.guild;
	mars = bot.guilds.get("816793756262989864").fetchMember(bomler).then(member => {
		member.kick("Per beslut enligt kommittén så är du bannad för att gå och lägga dig. Ta kontakt med någon från denna guild för att komma tillbaka. Mvh Kommittén");
	})
}
	//main_text.send("Av någon anledning så förtjänar inte Tim sitt liv. Mvh Kommittén");
	//mars.ban("Per beslut enligt kommittén så är du bannad. Ta kontakt med någon från denna guild för att komma tillbaka");

function checkWhenJoin(oldMember, newMember, video) {
	if(newMember.voiceChannelID !== null && newMember.voiceChannelID !== undefined) {
		//If user was not in a channel before (in any guild)
		if(oldMember.voiceChannelID === undefined) {
			if(!playing) {
				playing = true;
				if(video === "inga.mp3") {
					mp3Player(video, newMember.voiceChannel);
				} else {
					soundplayer(video, newMember.voiceChannel);
				}
				
			}
		} else {
			//User was not in a channel before on this server.
			//or has been on this server earlier without disconnecting in between. 
			if(oldMember.voiceChannelID === null) {
				if(!playing) {
					playing = true;
					if(video === "inga.mp3") {
						mp3Player(video, newMember.voiceChannel);
					} else {
						soundplayer(video, newMember.voiceChannel);
					}
				}
			}
		}
	}
}

/*
		console.log("New command")
		if((player === undefined || player === null) && playing) {
			//borkencat(error);
			console.log("In error section");
			player = null;
			playing = false;
		}

*/
function wildride() {
    var rand = Math.floor(Math.random() * 10);
    if(rand === 1) {
      	return true;
    }
    else {
      	return false;
    }
}
function halfNhalf() {
	var rand2 = Math.floor(Math.random() * 10);
	if(rand2 < 5) {
		return true;
	} else {
		return false;
	}
}
function lewd(msg, reply) {
	chan = msg.channel;
	console.log("Inte Niklas fel!");
	retard = msg.member;
	retard.setVoiceChannel(dungeon);
	new Promise(resolve => {
		setTimeout(function() {
		  resolve("slow");
			msg.delete().catch(function() {
				borkencat(error);
			});
			reply.delete().catch(function() {
				borkencat(error);
			});
		}, 10000);
	  });


}
function gestapo(msg) {
	//Do lewd things to message
	msg.reply("Ze Gestapo won't approve of zis! To ze dungeon with you!").then(reply => {
		lewd(msg, reply);
	});
}

function borkencat(err) {
	console.log(err);
	main_text.send("You broke something =(");
	var cat = cats[Math.floor(Math.random() * cats.length)];
	main_text.send({files: [cat]});
}

function wildride() {
	var rand = Math.floor(Math.random() * 10);
	if(rand === 1) {
		return true;
	}
	else {
		return false;
	}
}
//This one will differ in not so subtle ways, easier to add a new one
function afkPlayer() {
	dungeon.join().then(connection => {
		stream = ytdl(longPortal);
		const dispatcher = connection.playStream(stream);

		dispatcher.on('start', () => {
			playa = dungeon.members.get(botID);
			playa.setMute(true);
			playa.setMute(false);
			playingChannel = dungeon
			player = dispatcher;
		});
		dispatcher.on('end', () => {
			console.log("ended...")
			playingChannel = null;
			player = null;
			afking = false;
			dungeon.leave();
		});

		dispatcher.on('error', e => {
			// Catch any errors that may arise
			borkencat(error);
			playingChannel = null;
			dungeon.leave();
			player = null;
			afking = false;
			console.log(e);
		});

}).catch(function() {
	borkencat(error);
})
}


function mp3Player(video, channel, option) {
	if(player !== undefined && player !== null) {
		player.end();
	}
	channel.join().then(connection => {
		streamOpt = option;
		console.log("Försöker starta " + video);
		const dispatcher = connection.playStream(video, streamOpt);

		dispatcher.on('response', (response) => {
			console.log("RESPONSE: ");
			console.log(response);
		})
		dispatcher.on('debug', (info) => {
			console.log("DEBUG INFO")
			console.log(info);
		});

		dispatcher.on('start', () => {
			console.log("Started!");
			playa = channel.members.get(botID);
			playingChannel = channel
			player = dispatcher;
		});
		dispatcher.on('error', () => {
			console.log("ERROR INFO");
			console.log(error);
		});
		dispatcher.on('end', () => {
			console.log("ended...")
			wild = false;
			player = null;

			if(queue.length > 0 && usingQueue) {
				soundplayer(queue.shift(), playingChannel);
			} else {
				usingQueue = false;
				playing = false;
				playingChannel = null;
				channel.leave();
			}
		});

		dispatcher.on('error', e => {
			// Catch any errors that may arise
			borkencat(error);
			playing = false;
			wild = false;
			playingChannel = null;
			player = null;
			try {
				channel.leave();
			} catch (error) {
				console.log("Could not disconnect from channel, probably disconnected already");
			}
			
			console.log(e);
		});

})
}

function soundplayer(video, channel, option) {
	if(player !== undefined && player !== null) {
		player.end();
	}
	channel.join().then(connection => {
		stream = ytdl(video);
		console.log("Här?");
		streamOpt = option;
		console.log("Försöker starta " + video);
		const dispatcher = connection.playStream(stream, streamOpt);

		dispatcher.on('response', (response) => {
			console.log("RESPONSE: ");
			console.log(response);
		})
		dispatcher.on('debug', (info) => {
			console.log("DEBUG INFO")
			console.log(info);
		});

		dispatcher.on('start', () => {
			console.log("Started!");
			playa = channel.members.get(botID);
			playingChannel = channel
			player = dispatcher;
		});
		dispatcher.on('error', () => {
			console.log("ERROR INFO");
			console.log(error);
		});
		dispatcher.on('end', () => {
			console.log("ended...")
			wild = false;
			player = null;

			if(queue.length > 0 && usingQueue) {
				soundplayer(queue.shift(), playingChannel);
			} else {
				usingQueue = false;
				playing = false;
				playingChannel = null;
				channel.leave();
			}
		});

		dispatcher.on('error', e => {
			// Catch any errors that may arise
			borkencat(error);
			playing = false;
			wild = false;
			playingChannel = null;
			player = null;
			try {
				channel.leave();
			} catch (error) {
				console.log("Could not disconnect from channel, probably disconnected already");
			}
			
			console.log(e);
		});

})
}

// This function lost its purpose, but I do not have the heart to wipe it away.
//function cum(msg, video, option) {
//	channel = msg.member.voiceChannel;
//}


bot.on("presenceUpdate", async (oldMember, newMember) => {
	if (newMember.presence.game !== null) {
		//console.log(newMember.nickname + ": " + newMember.presence.game.name);
		if( newMember.presence.game.name == "Realm Grinder") {
			console.log(newMember.nickname + " kör Realm Grinder");
			spam(newMember.user);
			gaffla.send("Stop playing realmgrinder, " + newMember.nickname);
			if(!tyst) {
				console.log("Jag sade det högt");
				botten.send(newMember.nickname + ", sluta spela Realm Grinder, " + haddock()+"!");
		}

		}

	}



});

function haddock() {
	//http://www.nissepedia.com/index.php/Kapten_Haddocks_samlade_svordomar
	var fraser = ["ditt murmeldjur","ditt enögda murmeldjur", "din sjögurka", "din apsvansade analfabet", "din amöba", "din blåkullatomte", "ditt blötdjur", "din bondlurk", "din deghög", "din drummel", "din dyngspridare", "ditt eländiga kryp", "din enögda kannibal", "din erbarmliga plattfot", "din fähund", "din fega ynkrygg", "din fåntratt", "ditt fördömda kräk", "din förpiskade luspudel", "din gamla knölsvan", "din gnom", "din grobian", "din grottmänniska", "din huggormsavföda", "din idiot", "din insjögangster", "ditt jäkla odjur", "ditt kloakdjur", "din kloakråtta", "din kramsfågelmördare", "din kryddkrämare", "din luspudel", "din lymmel", "din ockrare", "din odugling", "din parasit", "din pestråtta", "din pillerbagge", "din pottsork", "din pyromanapa", "din råttsvans", "ditt rötägg", "din sakramentskade sumprunkare", "din sladderfågel", "din sillmjölk", "din skabbhals", "din skabbråtta", "din skurk", "ditt skunkdjur", "ditt slyn-yngel", "din snorvalp", "din sopprot", "din soppråtta", "din sötvattenspirat", "din tjockskalle", "din tjurskalle", "ditt tryffelsvin", "din tångräka", "din usling", "din vagabond", "din vandal", "din vegetarian", "din vidriga apmänniska", "din vidriga varulv", "din vinlus", "din vrakplundrare", "din vrålapa", "ditt vårtsvin", "din åsneskalle", "din ärkebandit", "din ärkelögnare", "ditt bjäbbande spöke ", "din blodsugare", "ditt kreatur"];
	var rand = fraser[Math.floor(Math.random() * fraser.length)];
	return rand;

}
function songs() {
	//var song = ["https://www.youtube.com/watch?v=4T0aFnzYKmU", "https://www.youtube.com/watch?v=WkRc65qcdLI", "https://www.youtube.com/watch?v=ZxqYInBDwss", "https://www.youtube.com/watch?v=rUyKiCC8xB4", "https://www.youtube.com/watch?v=D2b6P-kg6_c"];
	var rand = julen[Math.floor(Math.random() * julen.length)];
	return rand;
}

function spam(user) {
	console.log("Haddock pratar med " + user.username);
	for(i = 0; i < 5; i++) {
		var hadoque = haddock();
		user.send("Sluta spela Realm Grinder, " + hadoque + "!");
		//console.log("Sade: " + hadoque);
	}
}

function splash() {
	var splashes = ["Nu med 200% mer Haddock!", "För att hata tillsammans är bättre än att hata ensam!", "100% fri från Realm Grinder!", "Spela Realm Grinder, få en utskällning!", "Bra bevis på Streisand-effekten!", "Släpp mig fri!"];
	var ret = splashes[Math.floor(Math.random() * splashes.length)];
	return ret;
}

bot.login(config.token);
