import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import useWebSocket from "./hooks/useWebSocket";

function App() {
  const [message, setMessage] = useState([]);
  const { connected, socket } = useWebSocket("http://192.168.5.198:3000");
  useEffect(() => {
    if (connected)
      socket.on("order", (msg) => setMessage((prev) => [...prev, msg]));
  }, [connected, socket]);
  const hanldeOrder = (socketID) => {
    socket.emit("isOrderAccepted", {
      message: "tu orden fue tomada con exito",
      socketID,
    });
  };
  return (
    <div className="App">
      <h1>test from app</h1>
      {message.map((msg) => (
        <div key={msg.id}>
          <h1>socket id: {msg.id}</h1>
          <h1>message: {msg.message}</h1>
          <button onClick={() => hanldeOrder(msg.id)}>confirmar</button>
          <button>cancelar</button>
        </div>
      ))}
      <div>
        <input type="text" placeholder="escribe el texto a enviar" />
      </div>
    </div>
  );
}

export default App;
