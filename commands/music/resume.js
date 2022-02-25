module.exports = {
    name: 'resume',
    aliases: ['devam'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ${client.config.red}`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**${queue.current.title}**, İsimli şarkı çalmaya devam ediyor.${client.config.onay} ` : `${message.author}, Birşeyler yanlış gitti. ${client.config.red}`);
    },
};