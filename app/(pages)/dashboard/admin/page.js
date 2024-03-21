import React from "react";
import { DatePickerWithRange } from "@/app/(pages)/dashboard/components/DatePicker";
import Stats from "@/app/(pages)/dashboard/components/Stats/Stats";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RecentComplaints from "@/app/(pages)/dashboard/components/RecentComplaints";
import MostKeyword from "@/app/(pages)/dashboard/components/MostKeyword";
import { listStats } from "@/app/(pages)/dashboard/components/Stats/ListDashboardStats";
import { socialMediaStats } from "@/app/(pages)/dashboard/components/Stats/SocialMediaStats";
import { ticketingStats } from "@/app/(pages)/dashboard/components/Stats/TicketingStats";
import TeamsDataCharts from "@/app/(pages)/dashboard/components/DataCharts/TeamsDataCharts";

function DashboardPage() {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 gap-5">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header className={`mb-6`}>
            <p className="mb-2 text-sm font-semibold text-amber-400">
              Halo, Admin 👋
            </p>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                Dashboard
              </h1>
              <DatePickerWithRange className="lg:justify-self-end" />
            </div>
          </header>
          <Stats listStats={listStats} />
        </div>

        {/*Section 2*/}
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-5">
          {/* Charts Data Keluhan */}
          <Card className="col-span-4 border-0 shadow-md shadow-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Data Keluhan</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>

          {/* Keluhan Terbaru */}
          <Card className="col-span-3 border-0 shadow-md shadow-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Keluhan Terbaru</CardTitle>
              <CardDescription>
                Keluhan terbaru dari beberapa platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentComplaints />
            </CardContent>
          </Card>
        </div>

        {/* Section 3 */}
        <div className="grid lg:grid-cols-9 grid-cols-1 lg:gap-5">
          {/* Charts Data Keluhan */}
          <Card className="col-span-3 border-0 shadow-sm lg:shadow-none lg:mb-0 mb-5">
            <CardHeader>
              <CardTitle className="text-xl">Kata Kunci Terbanyak</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <MostKeyword />
            </CardContent>
          </Card>

          {/* Keluhan Terbaru */}
          <Card className="col-span-6 border-0 shadow-md shadow-gray-100 lg:h-56 bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Platform</CardTitle>
              <CardDescription className="text-gray-300">
                Jumlah keluhan dari masing masing platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Stats listStats={socialMediaStats} />
            </CardContent>
          </Card>
        </div>

        {/* Section 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 p-6 bg-gray-100 rounded-xl">
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

        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Kelola Tim</CardTitle>
            <CardDescription>List pengerjaan tiket oleh tim.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <TeamsDataCharts />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default DashboardPage;
