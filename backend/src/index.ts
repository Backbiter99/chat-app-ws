import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

// see notin doc for schema of objects

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);

    if (parsedMessage.type == "join") {
      console.log("user joined room: " + parsedMessage.payload.roomId);
      allSockets.push({ socket, room: parsedMessage.payload.roomId });
    }

    if (parsedMessage.type == "chat") {
      console.log("user wants to chat");
      // current room of the user
      let currectUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket === socket)
          currectUserRoom = allSockets[i].room;
      }

      //send message to everyone in that room
      for (let i = 0; i < allSockets.length; i++) {
        if (currectUserRoom === allSockets[i].room) {
          allSockets[i].socket.send(parsedMessage.payload.message);
        }
      }
    }
  });
});
