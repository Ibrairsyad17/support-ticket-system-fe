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
  const [socket, setSocket] = useState(null);
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
    const socketInstance = io(
      `${BASE_URL}/notifications/${userInfo.company_id}`,
    );

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
  }, [userInfo.company_id]);

  return (
    <SocketIoContext.Provider value={socket}>
      {children}
    </SocketIoContext.Provider>
  );
};

export default SocketIOProvider;
