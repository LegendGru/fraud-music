const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help2',
    aliases: ['hh',"yardım2","y2"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription(`Fraud Music Bot daha fazlası için <@358197437858447363> ile iletişime geçebilirsiniz.
        **Müzik Komutları Açıklamaları**
        
        
\`\`\`
-nowplaying (np/çalan) -- O anda çalan şarkıyı gösterir\n\n-back (geri) -- Geçmiş şarkıyı açar\n\n-clear (temizle)-- Listeyi yemziler\n\n-pause(dur) -- Çalan şarkıyı durdurur\n\n-play (p) -- Şarkı başlatır  \n\n-filter -- Şarkıya filtre uygular\n\n-progress (süre) -- Şarkının süresini gösterir\n\n-loop (lp) -- Şarkıları döngüye alır\n\n-queue (liste) -- Şarkı listesini gösterir \n\n -resume (devam)-- Durdulan şarkıyı devam ettirir.\n\n-save (kaydet)--Çalan şarkı bilgisini DM'den atar\n\n-search (ara)--Şarkı arar ve listeleyip çalar\n\n-skip (geç) -- Şarkıyı geçer\n\n-stop (kapat)-- Şarkıyı kapatır\n\n -volume (ses)-- Sesi ayarlar                                                                                        

\`\`\``);
        
        embed.setTimestamp();
        embed.setFooter('fraud ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};





