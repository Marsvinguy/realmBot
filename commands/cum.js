const {SlashCommandBuilder} = require('discord.js');
const borken = require(__dirname+"\\..\\borken.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('cum')
        .setDescription('The OG'),
    async execute(interaction) {
        //await interaction.reply("Snart så låter det");
        borken.cat("CUM!", interaction);
    }

}