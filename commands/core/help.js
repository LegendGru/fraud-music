const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım","y"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription(`Fraud Music Bot daha fazlası için <@358197437858447363> ile iletişime geçebilirsiniz.
        **Müzik Komutları (Herkes Kullanabilir)**
        
        Bu komutları sunucu içerisindeki tüm herkes sorunsuz bir şekilde kullanabilir.
\`\`\`
-nowplaying (np/çalan) -back (geri)                     
-clear (temizle)       -pause(dur)                 
-play (p / başlat)     -filter             
-progress (süre)       -loop (lp)             
-queue (q /liste)      -resume (devam)
-save (kaydet)         -search (ara)
-skip (geç)            -stop (kapat)
-volume (ses)

\`\`\``);
        
        embed.setTimestamp();
        embed.setFooter('fraud ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};





