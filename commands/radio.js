const {SlashCommandBuilder} = require('discord.js');
const borken = require(__dirname + "\\..\\borken.js");
const player = require(__dirname + "\\..\\player.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('radio')
        .setDescription('For that Aperture mood'),
    async execute(interaction) {
        await interaction.deferReply({ephemeral: false});
        await player.play("https://www.youtube.com/watch?v=mD3v1B_aXw0", interaction, false);
        
    }

}