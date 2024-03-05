const config = require("./auth.json");
const borken = require(__dirname+"\\borken.js");
const { Client, Collection, Events, GatewayIntentBits, MessagePayload, EmbedBuilder } = require('discord.js');

const fs = require('node:fs');
const path = require('node:path');

const bob = new Client({ intents: [GatewayIntentBits.Guilds] });

bob.on(Events.ClientReady, ready => {
    console.log("Bob is ready!");
});

bob.commands = new Collection();

const folderPath = path.join(__dirname, 'commands');
const commandFolder = fs.readdirSync(folderPath).filter(file => file.endsWith(".js"));
console.log(commandFolder);
for(const file of commandFolder) {
    const filePath = path.join(folderPath, file);
    const command = require(filePath);
    if("data" in command && "execute" in command) {
        bob.commands.set(command.data.name, command);
    } else {
        console.log('Bob found faulty command at ${filePath}');
    }
    
}

bob.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        //interaction.reply(interaction.commandName + ' är inte ett command, ' + haddock());
        borken.cat(interaction.commandName + " är inte ett kommando", interaction);
        return;
    }
    try {
        await command.execute(interaction);
    } catch(error) {
        borken.cat(command.name + " gick fel", interaction);
    }
});

function haddock() {
	//http://www.nissepedia.com/index.php/Kapten_Haddocks_samlade_svordomar
	var fraser = ["ditt murmeldjur","ditt enögda murmeldjur", "din sjögurka", "din apsvansade analfabet", "din amöba", "din blåkullatomte", "ditt blötdjur", "din bondlurk", "din deghög", "din drummel", "din dyngspridare", "ditt eländiga kryp", "din enögda kannibal", "din erbarmliga plattfot", "din fähund", "din fega ynkrygg", "din fåntratt", "ditt fördömda kräk", "din förpiskade luspudel", "din gamla knölsvan", "din gnom", "din grobian", "din grottmänniska", "din huggormsavföda", "din idiot", "din insjögangster", "ditt jäkla odjur", "ditt kloakdjur", "din kloakråtta", "din kramsfågelmördare", "din kryddkrämare", "din luspudel", "din lymmel", "din ockrare", "din odugling", "din parasit", "din pestråtta", "din pillerbagge", "din pottsork", "din pyromanapa", "din råttsvans", "ditt rötägg", "din sakramentskade sumprunkare", "din sladderfågel", "din sillmjölk", "din skabbhals", "din skabbråtta", "din skurk", "ditt skunkdjur", "ditt slyn-yngel", "din snorvalp", "din sopprot", "din soppråtta", "din sötvattenspirat", "din tjockskalle", "din tjurskalle", "ditt tryffelsvin", "din tångräka", "din usling", "din vagabond", "din vandal", "din vegetarian", "din vidriga apmänniska", "din vidriga varulv", "din vinlus", "din vrakplundrare", "din vrålapa", "ditt vårtsvin", "din åsneskalle", "din ärkebandit", "din ärkelögnare", "ditt bjäbbande spöke ", "din blodsugare", "ditt kreatur"];
	var rand = fraser[Math.floor(Math.random() * fraser.length)];
	return rand;

}

bob.login(config.token);