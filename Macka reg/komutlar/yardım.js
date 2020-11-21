const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Mâcka Bot`)
.setDescription(`


:white_small_square: **=**  \`!erkek\` : **Erkek Kayıt**
:white_small_square: **=**  \`!kız\`:  **Kız Kayıt**
:white_small_square: **=**  \`!istatistik\`:  **Bot İstatistiklerini Verir**

`)
.setImage("https://cdn.discordapp.com/attachments/751436097099137177/778336195520102430/af8039261a387be71514bb4c2e5e54b5.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};