const {AttachmentBuilder, ChatInputCommandInteraction} = require('discord.js');
const fs = require("node:fs");

module.exports = { 
    async cat(err, interaction = ChatInputCommandInteraction) {
        console.log(err);
        if(interaction) {
            try{
                const cats = fs.readdirSync(__dirname + "\\cats\\");
                var cat = __dirname + "\\cats\\" + cats[Math.floor(Math.random() * cats.length)];
                const file = new AttachmentBuilder(cat);
                await interaction.followUp({content: err, files: [file], ephemeral: false, tts: false});
            } catch(error) {
                console.log("Borken is borken?!: " + error);
                await interaction.followUp({content: "Borken is borken?!", ephemeral: false, tts: false})
            }

        }
        return;
    }  
}