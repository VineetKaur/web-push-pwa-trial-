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
      "https://fcm.googleapis.com/fcm/send/ctSAGLCL7TQ:APA91bFO9exBDWxzSf8tAYecHTR1H5ld15S9UU-ZRLK5j0b5hlTHrUrO0xWhHPwPTaXMy5oH57Pult1TBjI5neOb2CmQHOSsc9u0vhAbT0mOdPxxuF3rhuNaUC1oTcBOIKAdRU5tpCC_",
   expirationTime: null,
   keys: {
      p256dh:
         "BKIOjVNkRjWg0RXhtd9W4bd9XfyPGqci2CQXIin1VS9RG-9q38ky-rSAq0biZnhXwP_JFhMXyrHFHaBcd3AW7-g",
      auth: "DX8b0YeieYdqoMlqae3otQ"
   }
};

push.sendNotification(sub, "test message");
