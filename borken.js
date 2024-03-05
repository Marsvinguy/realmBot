const cats = ["sadcat1.jpg", "sadcat2.png", "sadcat3.jpg", "sadcat4.jpg", "sadcat5.jpg", "sadcat6.jpg", "sadcat7.jpg", "sadcat8.jpg", "sadcat9.jpg", "sadcat10.jpg", "sadcat11.png"];
const {EmbedBuilder, AttachmentBuilder, MessagePayload} = require('discord.js');
module.exports = { 
    async cat(err, interaction) {
        console.log(err);
        if(interaction) {
            var cat = cats[Math.floor(Math.random() * cats.length)];
            const file = new AttachmentBuilder(cat);
            interaction.reply({content: err  , files: [file], ephemeral: false, tts: false});
            
        }
    
    }
    
}