import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/(pages)/(dashboard)/components/Tabs/Tabs";

const TabsContents = ({ defaultValue, values }) => {
  return (
    <Tabs defaultValue={defaultValue} className="bg-white">
      <TabsList className="px-0 rounded-none bg-white">
        {values.map((val, index) => (
          <TabsTrigger key={index} value={val.value} className="rounded-none">
            {val.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {values.map((val, index) => (
        <TabsContent key={index} value={val.value}>
          {val.DataTable}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsContents;
