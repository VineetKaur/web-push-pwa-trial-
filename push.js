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

push.sendNotification(sub, "test message");
