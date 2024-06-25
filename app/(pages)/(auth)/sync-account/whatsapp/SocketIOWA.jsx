import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { startWhatsappSession } from "@/app/api/repository/usersAndCompanyRepository";
import { BASE_URL } from "@/app/utils/constant";
import { io } from "socket.io-client";

const SocketIoContext = createContext(undefined);

export const useSocketWA = () => {
  return useContext(SocketIoContext);
};

const SocketIoWAProvider = ({ children }) => {
  const [sockets, setSockets] = useState(null);
  const { data: session } = useSession();

  const [waSession, setWaSession] = React.useState({});

  const fetchWaSession = async () => {
    const res = await startWhatsappSession(session?.token.data.token);
    console.log("res", res);
    if (res) {
      setWaSession(res.data.data);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchWaSession();
    }
  }, [session?.token.data.token]);

  useEffect(() => {
    const socketInstances = {
      whatsapp: io(`${BASE_URL}/whatsapp-qr/${waSession.sessionId}`),
    };

    Object.values(socketInstances).forEach((socketInstance) => {
      socketInstance.on("connect", () => {
        console.log("connected");
      });

      socketInstance.on("disconnect", () => {
        console.log("disconnected");
      });
    });

    setSockets(socketInstances);
  }, [waSession.sessionId]);

  return (
    <SocketIoContext.Provider value={sockets}>
      {children}
    </SocketIoContext.Provider>
  );
};

export default SocketIoWAProvider;
