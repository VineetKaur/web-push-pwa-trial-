//on server side

var push = require("web-push");

//let vapidKeys = push.generateVAPIDKeys();

//console.log(vapidKeys);
// hardcode the values instead on generating them each time

let vapidKeys = {
   publicKey:
      "BEupLAzaluKb5-uGeZbhN7H9UPMaRHk85IHD_qXZvTpBWvQZeo8Lo0Lk1cekr2iwNsl-Tdql2HyN8biVgswAJwU", //goes out with the web app - to be addeed in the appln server key in subscribe
   privateKey: "2KVhIoQy-odo_iitxbjiNDqTwJhrMx6-QHZ41WgpChQ"
};

push.setVapidDetails(
   "mailto:vksethi_b16@ce.vjti.ac.in",
   vapidKeys.publicKey,
   vapidKeys.privateKey
);

//pull sub out of the db - stored ppl that want to recieve notifications (value of JSON.stringify(push))
let sub = {
   endpoint:
      "https://fcm.googleapis.com/fcm/send/dx8UE9hZNKM:APA91bFxfmcwKyL5Vev90cLll4_ZVlUqO6kRyavieKzHsnwX1yeAew122nWX3chhkZVsGsf8IjemogueleuFzoEfuWU7wxPtukWVY7417lAfKIZtv_AemuR-rtSiyaTRfAuXE5OZO0jZ",
   expirationTime: null,
   keys: {
      p256dh:
         "BH6luXQNTv7dOfGyXIzZOAk3AeIJwnr5YJazJtPcBLXxQ8bb085bwn8k5_cqCy76HqFetXlaXrGKQNUrmubeJn0",
      auth: "dUHNLAmziajgsRIEMM0_6Q"
   }
};

//sub = {"endpoint":"https://sg2p.notify.windows.com/w/?token=BQYAAAAdxXz0xCP3E7vXZWzOdPrqGvALPxJRnYHw3U7%2fZ0nTkxFJcyR46uR9ttwWA4Jxd4Ez8AiMZcyvmNjo6COHHRe326FkyCKNK9JP00IliLjFtjZNdmtCgk56G1hxeAnF%2ff20VgYvxp9lJvy1vsQtzs3k2vNZ5mmInIaBQ7bb8Lf0%2f9fZzQVo%2fGl%2bmWIH5Z2aNojv0aBLSPAETUZ0Xs69FaCwqwx6bkEFvlPdERPn99P1dIGsteVu%2buWGskQeLdu6RPWmPZ%2fLDFcmnDoxrpb%2bXqTLLoda6YkJZxW3YHe7r%2fyb7m2lQb7AZORS9u%2bWDt8aQpRREuOjCu9UPZ3NEcVtbvT2","expirationTime":1581662956000,"keys":{"auth":"6TOQio0JXosiLg3Los9aqA","p256dh":"BN2H-jeJfwcOGePx_wUGsovBDq-vuLln5Rg17yBgK5dlRjh2bk9zwKYA6AtB2-IzFZnnr6K-5zbXjIN89q6VgXg"}};
//sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeHrs3h0wdjzYCT9SlPt-u5jeDOn7JQ7e2rnKhDUbOMlZl5IPMZgPiA3ZWMSj7Q-FB5coNikMeRQT_e8OXiXGMLjZX2pRb7ibtZ9TF4Ton4-S0F2i7EtE6sTL4oVgDjF7ykK2Pj3G_oNGGQpR5_wTxtLRcPsV_5m3bYm3zXnRcYht-p18","keys":{"auth":"T_wr9037h0Sugans1e-sxg","p256dh":"BIFTweQQUzFGf93tnJZB-vixVD7nRismWDOJNHGAJfSsX4YOpbrTJ9isqXbqDJh2shdASZkzhdPuUgZzOSZRmlY"}};
//sub = {"endpoint":"https://sg2p.notify.windows.com/w/?token=BQYAAADBV9hMdhaHwLvrV6jBXg%2bm3CtkxaMrGsk2uf4KbIlaNTieC9%2feRJ58KxvyCcPj%2foyH9APfI9ZyFGU0I%2bMGj%2byO%2fYaQCTTA5CnKh7zSzyNCj2pTac23Fc6d4nU9P5titngZIQ53ncH6g2fzNgvnlvi8b%2bp8l0AhogCPMUnsfgHmyKn58dMuq9yXyrV9I7uFiEi%2faZTDQFJBsDMDCfrH5aDN%2bfsYf2w8pbhbvrQnIHojQ6YawNA2K%2bMBi8vDljM2ECObMweqhOVmINVDTcR%2fUD9ALbrN4G2iF%2b263IyYyquCcuRJ15MdUmVsBrhfwhjPaJ%2bH9QD2NL3wNC68YKo6HItN","expirationTime":1581663100000,"keys":{"auth":"5veTT89mOqMQBimE95haPg","p256dh":"BP7I9eVynT1ArIv6MAs3243c9cOWRm-mw6Mn5ISyoGMJcuErK48bTYKTanQ8mTKhW-RaLzcGtAFJNFsZ920MYUg"}};
push.sendNotification(sub);
