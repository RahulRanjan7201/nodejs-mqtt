const mqtt = require("mqtt");
const client = mqtt.connect("http://localhost",{username:"alpha", password:"alpha",  port: 9091});
client.on("connect", async() => {
   await console.log("Client is connected");
})
client.on("error", (err) => {
    console.log("Client is connected");
    if(err) {
        console.log("Error" + err)
    }
})