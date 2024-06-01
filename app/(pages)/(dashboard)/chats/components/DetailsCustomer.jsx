import React from "react";
import {
  TabsList,
  TabsContent,
  TabsTrigger,
  Tabs,
} from "@/app/(pages)/(dashboard)/components/Tabs/Tabs";
import TabCustomerDetails from "@/app/(pages)/(dashboard)/chats/components/Tabs/TabCustomerDetails";
import TabCreateTicket from "@/app/(pages)/(dashboard)/chats/components/Tabs/TabCreateTicket";
import TabsTicketHistory from "@/app/(pages)/(dashboard)/chats/components/Tabs/TabsTicketHistory";

const DetailsCustomer = ({ type = "desktop", data }) => {
  return (
    <Tabs
      defaultValue="customer"
      className={`${type === "mobile" ? "block" : "hidden"} lg:block w-full col-span-2 h-full overflow-y-scroll`}
    >
      <TabsList className="bg-white flex mx-auto mt-3.5">
        <TabsTrigger
          className="rounded-none py-2 px-2 font-semibold"
          value="customer"
        >
          Data Pelanggan
        </TabsTrigger>
        <TabsTrigger
          className="rounded-none py-2 px-2 font-semibold"
          value="ticket"
        >
          Buat Tiket
        </TabsTrigger>
        <TabsTrigger
          className="rounded-none py-2 px-2 font-semibold"
          value="history"
        >
          Riwayat Tiket
        </TabsTrigger>
      </TabsList>
      <TabsContent value="customer">
        <TabCustomerDetails data={data} />
      </TabsContent>
      <TabsContent value="ticket">
        <TabCreateTicket />
      </TabsContent>
      <TabsContent value="history" className="pb-5">
        <TabsTicketHistory />
      </TabsContent>
    </Tabs>
  );
};

export default DetailsCustomer;
