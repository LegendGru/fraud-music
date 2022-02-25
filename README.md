# Discord.js v13 Müzik Botu 

## Botun İntentlerini Açmayı Unutma!

* Botu çalıştırmak için öncelikle `config.js` gerekli yerleri ve `main.js`'de token bölümünü doldurunuz
* Consolu açıp ```npm install``` yazarak tüm modülleri kur.
* Kurulum bittikten sonra ```node main.js``` yaz ve botu başlat.

``````json
 {
        "px": "!",
        "playing": "F R A U D",

        "red":"<a:ates:831631562235445278>",
        "onay":"<a:onay:831631087750348861>",
       "yklnyr":"<a:yklenyor:900010941800910889> ",
        "yldz":"<a:yildizz:900010941180174357>",

    opt: {
        DJ: {
            enabled: false, //EĞER SADECE DJLER KULLANA BİLSİN İSTİYOR İSENİZ false yazanı true yapın.
            roleName: 'DJ', //DJ ROLÜNÜN İSMİ NE OLACAK İSE YAZIN SUNUCUNUZDA O ROLDEKİLER KULLANA BİLİR
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //DOKUNMA
        },
        maxVol: 250, //maximum ses seviyesi kaç olacak belirte bilirsiniz.
        loopMessage: false, //dokunma
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //dokunma
                highWaterMark: 1 << 25 //dokunma
            }
        }
    }
};
}
```
