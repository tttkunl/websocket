// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:3000");

// Connection opened
socket.addEventListener('open', function (event) {
    console.log('Open connection')
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log(`Message from server: ${event.data}`);
});