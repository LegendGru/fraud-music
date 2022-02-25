module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Şu anda çalan müzik yok. ${client.config.red}`, ephemeral: true, components: [] });

            int.member.send(`**Parça Kaydedildi: \`${queue.current.title}\` ${client.config.onay} **`).then(() => {
                return int.reply({ content: `Müziğin adını özel mesajla sana gönderdim ${client.config.onay} `, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Size özel mesaj gönderemiyorum. ${client.config.red}`, ephemeral: true, components: [] });
            });
        }
    }
};