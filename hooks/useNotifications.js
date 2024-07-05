import { useSession } from "next-auth/react";
import React from "react";
import { useSocket } from "@/context/SocketIOProvider";
import { getAllNotifications } from "@/app/api/repository/notificationRepository";

export default function useNotifications() {
  // Session
  const { data: session } = useSession();

  // Call WebSocket (Socket.IO)
  const sockets = useSocket();
  const socket = sockets ? sockets.notifications : null;

  // State
  const [notifications, setNotifications] = React.useState([]);

  // Fetching Notifications
  React.useEffect(() => {
    if (socket) {
      socket.on("NOTIFICATION", async (data) => {
        const restructuredData = {
          action_by_accounts: {
            id: data.action_by_id,
            name: data.action_by_name,
            photo_profile: data.action_by_photo,
          },
          action_message: data.action_message,
          action_type: data.action_type,
          recipient: data.recipient_id,
          recipient_accounts: {
            name: data.recipient_name,
          },
          updated_at: data.sent_time,
        };
        setNotifications((prevNotifications) => {
          return [restructuredData, ...prevNotifications];
        });
      });
    }

    return () => {
      if (socket) {
        socket.off("NOTIFICATION");
      }
    };
  }, [socket]);

  const fetchNotifications = async () => {
    const res = await getAllNotifications(session?.token.data.token);
    if (res) {
      const notificate = res.data.data.notifications.map((notification) => {
        let status = { ...notification };
        status.action_message = status.action_message.replace(
          "IN_PROGRESS",
          "Dikerjakan",
        );
        status.action_message = status.action_message.replace(
          "DONE",
          "Selesai",
        );
        status.action_message = status.action_message.replace(
          "CHECKED",
          "Diperiksa",
        );
        status.action_message = status.action_message.replace(
          "ASSIGNED",
          "Ditugaskan",
        );

        let name = { ...status };
        name.action_message = name.action_message.replace(
          status.action_by_accounts.id,
          status.action_by_accounts.name,
        );

        return name;
      });

      setNotifications(notificate);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchNotifications();
    }
  }, [session?.token.data.token]);

  // Return
  return {
    notifications,
  };
}
