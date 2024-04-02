import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/(pages)/dashboard/admin/list-complaints/components/Tabs";
import DataTable from "@/app/(pages)/dashboard/admin/list-complaints/components/TableComplaints";

const TabsContents = () => {
  return (
    <Tabs defaultValue="all" className="bg-white">
      <TabsList className="px-0 rounded-none bg-white">
        <TabsTrigger value="all" className="rounded-none">
          Semua
        </TabsTrigger>
        <TabsTrigger value="app" className="rounded-none">
          Aplikasi
        </TabsTrigger>
        <TabsTrigger value="services" className="rounded-none">
          Layanan
        </TabsTrigger>
        <TabsTrigger value="customer-services" className="rounded-none">
          Customer Service
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <DataTable></DataTable>
      </TabsContent>
    </Tabs>
  );
};

export default TabsContents;
