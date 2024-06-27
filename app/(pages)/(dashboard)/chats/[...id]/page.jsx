"use client";
import React from "react";
import Header from "@/app/(pages)/(dashboard)/chats/components/Header";
import ChatsColumn from "@/app/(pages)/(dashboard)/chats/components/ChatsColumn";
import InputMessageSection from "@/app/(pages)/(dashboard)/chats/components/InputMessageSection";
import DetailsCustomer from "@/app/(pages)/(dashboard)/chats/components/DetailsCustomer";
import { useSession } from "next-auth/react";
import { getChatsInfo } from "@/app/api/repository/customersRepository";

const ChatsPage = ({ params: { id } }) => {
  const { data: session } = useSession();

  const [chatsInfo, setChatsInfo] = React.useState({});

  const fetchChatsInfo = async () => {
    const response = await getChatsInfo(session?.token.data.token, id[0]);
    if (response) {
      setChatsInfo(response.data.data.conversations[0]);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchChatsInfo();
    }
  }, [session?.token.data.token]);

  return (
    <div className="grid lg:grid-cols-6 absolute bottom-0 top-0 left-0 right-0">
      <div className="lg:col-span-4 border-r bg-white flex flex-col space-y-2 items-center">
        <Header data={chatsInfo} cid={id[0]} />
        <ChatsColumn id={id[0]} />
        <InputMessageSection
          platform={chatsInfo.social_media?.platform}
          sessionId={chatsInfo.social_media?.id}
          customer={chatsInfo.customers}
          id={id[0]}
        />
      </div>
      <DetailsCustomer data={chatsInfo} id={id[0]} />
    </div>
  );
};

export default ChatsPage;
