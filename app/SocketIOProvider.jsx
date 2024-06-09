import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASE_URL } from "@/app/utils/constant";
import { useSession } from "next-auth/react";
import { getUserInfo } from "@/app/api/repository/usersAndCompanyRepository";

const SocketIoContext = createContext();

export const useSocket = () => {
  return useContext(SocketIoContext);
};

const SocketIOProvider = ({ children }) => {
  const [sockets, setSockets] = useState(null);
  const { data: session } = useSession();

  const [userInfo, setUserInfo] = React.useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone_number: "",
    photo_profile: "",
    role: "",
    otp_enabled: "",
    company_id: "",
    pic_role_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const fetchUserInfo = async () => {
    const res = await getUserInfo(session?.token.data.token);
    if (res) {
      setUserInfo(res.data.data);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchUserInfo();
    }
  }, [session?.token.data.token]);

  useEffect(() => {
    const socketInstances = {
      notifications: io(`${BASE_URL}/notifications/${userInfo.company_id}`),
      assignment_conversations: io(
        `${BASE_URL}/assignment-conversations/${userInfo.company_id}`,
      ),
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

    return () => {
      Object.values(socketInstances).forEach((socketInstance) => {
        socketInstance.disconnect();
      });
    };
  }, [userInfo.company_id]);

  return (
    <SocketIoContext.Provider value={sockets}>
      {children}
    </SocketIoContext.Provider>
  );
};

export default SocketIOProvider;
