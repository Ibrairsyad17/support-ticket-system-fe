import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASE_URL } from "@/app/utils/constant";

const SocketIoContext = createContext();

export const useSocket = () => {
  return useContext(SocketIoContext);
};

const SocketIOProvider = ({ children, id }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(`${BASE_URL}/notifications/${id}`);

    socketInstance.on("connect", () => {
      console.log("connected");
    });

    socketInstance.on("disconnect", () => {
      console.log("disconnected");
    });

    setSocket(socketInstance);
    console.log("Socket instance:", socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [id]);

  return (
    <SocketIoContext.Provider value={socket}>
      {children}
    </SocketIoContext.Provider>
  );
};

export default SocketIOProvider;
