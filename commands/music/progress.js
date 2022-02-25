module.exports = {
    name: 'progress',
    aliases: ["süre"],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ${client.config.red}`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Bu şarkı canlı yayınlanıyor, görüntülenecek süre verisi yok. ${client.config.red}`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};