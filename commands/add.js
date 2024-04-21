const {SlashCommandBuilder} = require('discord.js');
const borken = require(__dirname + "\\..\\borken.js");
const player = require(__dirname + "\\..\\player.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Lägg till skräp till kön')
        .addStringOption(option => 
            option.setName('länkjävel')
                .setDescription("Länkjävel att spela")),
    async execute(interaction) {
        const url = interaction.options.getString('länkjävel') ?? null;
        await interaction.deferReply({ephemeral: false});
        await player.add(url, interaction);
    }

}