"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import {
  getCommentsById,
  postComment,
} from "@/app/api/repository/commentRepository";
import TimeAgo from "react-timeago";
import { useSocket } from "@/app/SocketIOProvider";

const Comment = ({ id, pic, admin }) => {
  const { data: session } = useSession();
  const [commentID, setCommentID] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [commentInput, setCommentInput] = React.useState("");
  const [role, setRole] = React.useState("");

  // Call Websocket

  const sockets = useSocket();
  const socket = sockets ? sockets.assignment_conversations : null;

  const fetchComments = async () => {
    const res = await getCommentsById(session?.token.data.token, Number(id));
    if (res) {
      const comment =
        res.data.data.assignment_conversations[0].assignment_messages;

      setCommentID(res.data.data.assignment_conversations[0].id);
      setRole(session?.token.data.role);

      const restructuredComment = comment.map((item) => {
        return {
          sender_name: item.sender_name,
          sender_photo: item.sender_photo_profile,
          message: item.message,
          sent_time: item.sent_time,
          sender_id: item.sender,
        };
      });

      setComments(restructuredComment);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchComments();
    }
  }, [session?.token.data.token]);

  React.useEffect(() => {
    if (socket) {
      socket.on("MESSAGE", async (data) => {
        fetchComments();
      });
    }

    return () => {
      if (socket) {
        socket.off("MESSAGE");
      }
    };
  }, [socket]);

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [comments]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const data = {
      assignment_conversation_id: commentID,
      assignment_id: Number(id),
      chat: commentInput,
      recipient: role === "PIC" ? admin : pic,
      sent_time: new Date().toISOString(),
    };
    const send = await postComment(session?.token.data.token, data);
    if (send) {
      setCommentInput("");
      fetchComments();
      scrollToBottom();
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      <div className="flex flex-col space-y-2.5 lg:items-center h-96 overflow-y-scroll w-full">
        {comments.length === 0 && (
          <div className="text-center text-gray-600">Belum ada komentar</div>
        )}
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border rounded-lg flex flex-col space-y-2 p-3.5 w-full"
          >
            <div className="flex space-x-2.5 items-center text-xs">
              <Avatar className="h-4 w-4">
                <AvatarImage src={comment.sender_photo} alt="" />
                <AvatarFallback className="bg-gray-200 text-gray-400">
                  P
                </AvatarFallback>
              </Avatar>
              <span className="font-semibold text-green-600">
                {comment.sender_name}
              </span>
              <span className="text-gray-600">
                <TimeAgo date={comment.sent_time} />
              </span>
            </div>
            <p className="text-gray-600 text-left">{comment.message}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="w-full">
        <div className="w-full inline-flex space-x-2 rounded-lg border focus:border-none">
          <Input
            type="text"
            placeholder="Tulis Komentar..."
            className="border-none"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <Button
            size="icon"
            type="submit"
            variant="ghost"
            onClick={handleSendMessage}
          >
            <PaperPlaneIcon className="h-4 w-4 text-purple-600" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
