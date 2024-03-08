const zmq = require('zeromq');

const pushSocket = zmq.socket('push');
pushSocket.bindSync('tcp://127.0.0.1:3002');

const pullSocket = zmq.socket("pull");
pullSocket.connect("tcp://127.0.0.1:4002");

setInterval(() => {
  console.log('Pushing message from Node.js...');
  pushSocket.send('Hello from Node.js!');
}, 2000);

pullSocket.on("message", (message) => {
  const data = message.toString();
  console.log("Received message in NodeJS:", data);
});