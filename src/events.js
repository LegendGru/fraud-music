player.on('error', (queue, error) => {
    console.log(`Şarkı kuyruğu ile ilgili bir sorun oluştu => ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Bağlanma sorunu yaşıyorum => ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`${client.config.yldz} Müzik çalmaya başladı: **${track.title}** `);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**${track.title}** İsimli şarkı çalma listesine eklendi. ${client.config.onay} `);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send(`Bağlı olduğum ses kanalından birisi beni attı, bütün çalma listesi temizlendi! ${client.config.red}`);
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send(`Bulunduğum sesli kanalda kimse olmadığı için ses kanalından ayrıldım. ${client.config.red}`);
});

player.on('queueEnd', (queue) => {
    queue.metadata.send(`Bütün çalma sırası bitti, bence biraz daha müzik dinleye bilirsin. ${client.config.onay} `);
});