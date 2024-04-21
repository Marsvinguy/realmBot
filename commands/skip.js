const {SlashCommandBuilder} = require('discord.js');
const borken = require(__dirname + "\\..\\borken.js");
const player = require(__dirname + "\\..\\player.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skippa skräp'),
    async execute(interaction) {
        await interaction.deferReply();
        await player.skip(interaction);
    }

}