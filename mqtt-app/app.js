const mqtt = require('mqtt')
// const client = mqtt.connect('mqtt://test.mosquitto.org')

// client.on('connect', function () {

//     // console.log(client)
//     client.subscribe('presence', function (err) {
//         if (!err) {
//             client.publish('presence', 'Hello mqtt')
//         }
//     })
// })

// client.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(message.toString())
//     client.end()
// })

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
const host = 'wss://profacloud.profa.com.tr:9001'

const password =
    "";


const options = {
    keepalive: 30,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
    rejectUnauthorized: false,
    username: "user",
    password: password
}

console.log('connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', function (err) {
    console.log(err)
    client.end()
})

client.on('connect', function () {
    console.log('client connected:' + clientId)
    client.subscribe('#', { qos: 1 })
    // client.publish('#', 'wss secure connection demo...!', { qos: 1, retain: false })
})

client.on('message', function (topic, message, packet) {
    console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
})

client.on('close', function () {
    console.log(clientId + ' disconnected')
})