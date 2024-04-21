const {SlashCommandBuilder} = require('discord.js');
const borken = require(__dirname + "\\..\\borken.js");
const player = require(__dirname + "\\..\\player.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nut')
        .setDescription('Sluta spela skräp'),
    async execute(interaction) {
        await interaction.deferReply({ephemeral: false});
        await player.stop(interaction);
    }

}