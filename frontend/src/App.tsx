import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

function App() {
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState(null); // State to store the room name
  const wsRef = useRef();
  const inputRef = useRef();

  const joinRoom = (roomName) => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (e) => {
      setMessages((m) => [...m, e.data]);
    };

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: roomName,
          },
        })
      );
    };

    wsRef.current = ws;

    return () => {
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close();
      }
    };
  };

  useEffect(() => {
    if (room) {
      joinRoom(room);
    }
  }, [room]);

  const handleJoinRoom = () => {
    const roomName = inputRef.current.value.trim();
    if (roomName) {
      setRoom(roomName); // Set the room name and trigger the effect
    }
  };

  const sendMessage = () => {
    const message = inputRef.current.value.trim();
    if (message && wsRef.current) {
      wsRef.current.send(
        JSON.stringify({
          type: "chat",
          payload: {
            message,
          },
        })
      );
    }
  };

  return (
    <ThemeProvider>
      <div className="w-full">
        <div className="h-[10vh] flex justify-between w-full items-center p-2">
          <div className="text-xl font-bold">ChatApp</div>
          <ModeToggle />
        </div>

        {room ? (
          <div className="h-[98vh] flex flex-col p-2">
            <div className="h-4/5 bg-purple-400 dark:bg-black p-2 mb-2 rounded-md">
              {messages.map((message, index) => (
                <div key={index} className="mb-3">
                  <span className="w-11/12 rounded-lg dark:bg-slate-700 bg-yellow-300 p-1">
                    {message}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-full gap-5">
              <Input
                type="text"
                ref={inputRef}
                placeholder="Your message..."
                className="border-gray-600"
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </div>
        ) : (
          <div className="h-[98vh] flex flex-col justify-center items-center">
            <Input
              type="text"
              ref={inputRef}
              placeholder="Enter room name..."
              className="border-gray-600 mb-4 w-2/3"
            />
            <Button onClick={handleJoinRoom}>Join Room</Button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
