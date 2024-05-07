import React from "react";
import Header from "@/app/(pages)/(dashboard)/chats/components/Header";
import ChatsColumn from "@/app/(pages)/(dashboard)/chats/components/ChatsColumn";
import InputMessageSection from "@/app/(pages)/(dashboard)/chats/components/InputMessageSection";
import DetailsCustomer from "@/app/(pages)/(dashboard)/chats/components/DetailsCustomer";

const ChatsPage = ({ params }) => {
  return (
    <div className="grid lg:grid-cols-6 h-full">
      <div className="lg:col-span-4 border-r flex flex-col justify-between items-center">
        <Header />
        <ChatsColumn />
        <InputMessageSection />
      </div>
      <DetailsCustomer />
    </div>
  );
};

export default ChatsPage;
