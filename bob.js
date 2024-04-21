const config = require("./auth.json");
const borken = require(__dirname+"\\borken.js");
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

const fs = require('node:fs');
const path = require('node:path');

const commandChannel = "1156580744177660008";

const bob = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

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
    if(!interaction.isChatInputCommand()) return;
    //if(interaction.channelId != commandChannel) return;
    const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        //interaction.reply(interaction.commandName + ' är inte ett command, ' + haddock());
        await borken.cat(interaction.commandName + " är inte ett kommando", interaction);
        return;
    }
    try {
        console.log("Before " + interaction.commandName);
        await command.execute(interaction);
        console.log("After " + interaction.commandName);
    } catch(error) {
        await borken.cat(interaction.commandName  + " gick fel, error: " + error, interaction);
    }
});

bob.login(config.token);