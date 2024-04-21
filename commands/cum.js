const {SlashCommandBuilder} = require('discord.js');
const borken = require(__dirname+"\\..\\borken.js");
const player = require(__dirname + "\\..\\player.js"); 
module.exports = {
    data: new SlashCommandBuilder()
        .setName('cum')
        .setDescription('The OG'),
    async execute(interaction) {
        await interaction.deferReply({ephemeral: false});
        await player.play("https://www.youtube.com/watch?v=G8iOmVd1W_g", interaction, false);
    }

}