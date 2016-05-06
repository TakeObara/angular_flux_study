var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 12345});

wss.on('connection', (ws_) => {

});