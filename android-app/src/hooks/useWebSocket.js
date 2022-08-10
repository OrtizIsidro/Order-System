import { useEffect, useState } from "react";
import io from "socket.io-client";
function useWebsocket(url) {
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(url);
    newSocket.on("connect", () => {
      return setConnected(true);
    });
    newSocket.on("disconnect", () => {
      return setConnected(false);
    });
    setSocket(newSocket);
  }, []);
  return { connected, socket };
}
export default useWebsocket;
