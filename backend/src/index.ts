import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
  allSockets.push(socket);

  console.log("user connected #");

  socket.on("message", (message) => {
    console.log(message.toString());

    for (let i = 0; i < allSockets.length; i++) {
      const element = allSockets[i];
      element.send(message.toString() + ": sent from the server");
    }
  });

  socket.on("disconnect", () => {
    allSockets.filter((x) => x != socket);
  });
});
