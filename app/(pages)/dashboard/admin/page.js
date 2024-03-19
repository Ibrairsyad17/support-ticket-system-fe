import React from "react";
import { DatePickerWithRange } from "@/app/(pages)/dashboard/components/DatePicker";
import Stats from "@/app/(pages)/dashboard/components/Stats";
import {
  ArrowUpCircleIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import LatestComplaints from "@/app/(pages)/dashboard/components/LatestComplaints";

const listStats = [
  {
    id: 1,
    title: "Keluhan dibalas",
    value: 6783,
    icon: ArrowUpCircleIcon,
    backgroundColor: "bg-gradient-to-br from-violet-100 to-violet-200",
    textColor: "text-violet-500",
    shadowColor: "shadow-violet-300",
  },
  {
    id: 2,
    title: "Keluhan menunggu",
    value: 4570,
    icon: ClockIcon,
    backgroundColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    textColor: "text-amber-500",
    shadowColor: "shadow-amber-300",
  },
  {
    id: 3,
    title: "Keluhan diselesaikan",
    value: 12330,
    icon: CheckCircleIcon,
    backgroundColor: "bg-gradient-to-br from-green-100 to-green-200",
    textColor: "text-green-500",
    shadowColor: "shadow-green-300",
  },
];

function DashboardPage() {
  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-1 lg:col-span-2 grid-cols-1 h-auto">
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
        <LatestComplaints />
      </div>
    </>
  );
}

export default DashboardPage;
