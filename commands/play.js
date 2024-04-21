const {SlashCommandBuilder} = require('discord.js');
const borken = require(__dirname + "\\..\\borken.js");
const player = require(__dirname + "\\..\\player.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Spela något skräp')
        .addStringOption(option => 
                option.setName('länkjävel')
                    .setDescription("Länkjävel att spela")),
    async execute(interaction) {
		const url = interaction.options.getString('länkjävel') ?? null;
        await interaction.deferReply({ephemeral: false});
        await player.play(url, interaction, false);
    }

}