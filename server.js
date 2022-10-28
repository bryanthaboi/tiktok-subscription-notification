const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});
let subNumb = 0;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8086 })
wss.on('connection', async (ws) => {
    ws.on('message', message => { 
        message = JSON.parse(message);
        if(subNumb != message.number){
            subNumb = message.number;
            console.log(message);
            io.emit('subNumb',message);
        }
    });
  
});

io.on('connection', async (socket) => {

    console.info('New connection from origin', socket.handshake.headers['origin'] || socket.handshake.headers['referer']);
});

// Serve frontend files
app.use(express.static('public'));

// Start http listener
httpServer.listen(8085);
console.info(`Server running! Please visit http://localhost:8085`);