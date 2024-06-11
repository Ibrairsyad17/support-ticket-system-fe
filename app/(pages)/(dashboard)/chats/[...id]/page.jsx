"use client";
import React from "react";
import Header from "@/app/(pages)/(dashboard)/chats/components/Header";
import ChatsColumn from "@/app/(pages)/(dashboard)/chats/components/ChatsColumn";
import InputMessageSection from "@/app/(pages)/(dashboard)/chats/components/InputMessageSection";
import DetailsCustomer from "@/app/(pages)/(dashboard)/chats/components/DetailsCustomer";
import { useSession } from "next-auth/react";
import { getCustomerInfo } from "@/app/api/repository/customersRepository";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  getStatus,
  selectMessages,
} from "@/app/redux/slices/messagesSlice";

const ChatsPage = ({ params: { id } }) => {
  const { data: session } = useSession();
  // const dispatch = useDispatch();
  // const getMessages = useSelector(selectMessages);
  // const getStatusInfo = useSelector(getStatus);

  const [customer, setCustomer] = React.useState([]);

  const fetchCustomer = async () => {
    const response = await getCustomerInfo(session?.token.data.token, id[0]);
    if (response.data) {
      setCustomer(response.data.data.conversations);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchCustomer();
    }
  }, [session?.token.data.token]);

  return (
    <div className="grid lg:grid-cols-6 absolute bottom-0 top-0 left-0 right-0">
      <div className="lg:col-span-4 border-r flex flex-col space-y-2 items-center">
        <Header data={customer[0] ?? []} />
        <ChatsColumn />
        <InputMessageSection />
      </div>
      <DetailsCustomer data={customer[0] ?? []} id={id[0]} />
    </div>
  );
};

export default ChatsPage;
