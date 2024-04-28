import React from "react";
import { DatePickerWithRange } from "@/app/(pages)/(dashboard)/components/DatePicker";
import NotificationContent from "@/app/(pages)/(dashboard)/pic/components/NotificationContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LatestAssignment from "@/app/(pages)/(dashboard)/pic/components/LatestAssignment";
import Stats from "@/app/(pages)/(dashboard)/components/Stats/Stats";
import { ticketingStats } from "@/app/(pages)/(dashboard)/components/Stats/TicketingStats";
import ComplaintsChartsPIC from "@/app/(pages)/(dashboard)/pic/components/ComplaintsChartsPIC";

const DashboardPICPage = () => {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header className={`mb-3`}>
            <p className="mb-2 text-sm font-semibold text-amber-400">
              Halo, Admin 👋
            </p>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                Dashboard
              </h1>
              <div className="flex space-x-2 lg:justify-end">
                <DatePickerWithRange className="lg:justify-self-end" />
                <NotificationContent />
              </div>
            </div>
          </header>
        </div>

        {/*Section 2*/}
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-5">
          {/* Charts Data Keluhan */}
          <Card className="col-span-4 border-0 shadow-md shadow-gray-100">
            <CardHeader className="">
              <CardTitle className="text-xl">Data Keluhan</CardTitle>
            </CardHeader>
            <ComplaintsChartsPIC />
          </Card>

          {/* Keluhan Terbaru */}
          <Card className="col-span-3 border-0 shadow-md shadow-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Tiket Baru Ditugaskan</CardTitle>
              <CardDescription>
                Keluhan terbaru dari beberapa platform yang ditugaskan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LatestAssignment />
            </CardContent>
          </Card>
        </div>

        {/* Section 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 p-6 bg-gray-100 rounded-xl my-5">
          <div className="flex flex-col space-y-2.5 justify-center col-span-1">
            <h3 className="font-semibold leading-none tracking-tight text-xl">
              Ticketing
            </h3>
            <p className="text-sm text-muted-foreground">
              List tiket yang telah dibuat.
            </p>
          </div>
          <Stats listStats={ticketingStats} className="col-span-4" />
        </div>
      </div>
    </>
  );
};

export default DashboardPICPage;
