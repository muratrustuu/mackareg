const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has('770753352908406785')) return message.reply('Bu Komut İçin <&@770753352908406785> Rolüne Sahip Olman Lazım')

  let verilecek = "770756010872012801"//ErkekRolİd
  let alınıcak = "770813669746409512"//KayıtsızRolİD
  let isim = args[1]
  let yaş = args[2]
  let a = message.mentions.members.first()
  
  if (!a) return message.reply('Kişi Belirt')
  if (!isim || !yaş) return message.reply('**İsim** Ve **Yaş** Belirt')
  if  (isNaN(yaş)) return message.reply('Yaşı Nasıl Rakamlardan Oluşmadan Belirtmeyi Düşünüyosun')
    db.add(`erkek_${message.author.id}`, 1)

 a.setNickname(`☯ ${isim}  ${yaş}`)
  a.roles.add(verilecek)
  a.roles.remove(alınıcak)
  
  message.channel.send(`${a} Adlı Kullanıcı Başarıyla Kaydoldu`)
  
  
  
  
  
}
exports.conf = {
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "erkek"
}