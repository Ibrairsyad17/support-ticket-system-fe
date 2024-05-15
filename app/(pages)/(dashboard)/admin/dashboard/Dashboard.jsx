"use client";
import React from "react";
import { DatePickerWithRange } from "@/app/(pages)/(dashboard)/components/DatePicker";
import Stats from "@/app/(pages)/(dashboard)/components/Stats/Stats";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import ComplaintsChartsAdmin from "@/app/(pages)/(dashboard)/admin/components/ComplaintsChartsAdmin";
import RecentComplaints from "@/app/(pages)/(dashboard)/admin/components/RecentComplaints";
import MostKeyword from "@/app/(pages)/(dashboard)/admin/components/MostKeyword";
import { socialMediaStats } from "@/app/(pages)/(dashboard)/components/Stats/SocialMediaStats";
import TeamsDataStats from "@/app/(pages)/(dashboard)/admin/components/TeamsDataStats";
import { useSession } from "next-auth/react";
import { getKeywords } from "@/app/api/repository/keywordsRepository";
import StatsCard from "@/app/(pages)/(dashboard)/admin/components/StatsCard";
import {
  getComplaintsByStatus,
  getLatestComplaints,
  getLatestComplaintsByDate,
} from "@/app/api/repository/complaintsRepository";

const Dashboard = () => {
  const { data: session } = useSession();
  const [doneComplaints, setDoneComplaints] = React.useState([]);
  const [onGoingComplaints, setOnGoingComplaints] = React.useState([]);
  const [onReviewComplaints, setOnReviewComplaints] = React.useState([]);
  const [latestComplaints, setLatestComplaints] = React.useState([]);
  const [latestComplaintsByDate, setLatestComplaintsByDate] = React.useState(
    [],
  );
  const [mostKeywords, setMostKeywords] = React.useState([]);
  const [keywords, setKeywords] = React.useState([]);
  const [userInfo, setUserInfo] = React.useState({
    id: "",
    username: "",
    name: "",
    email: "",
    phone_number: "",
    photo_profile: "",
    role: "",
    otp_enabled: "",
    company_id: "",
    pic_role_id: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const fetchMostKeywords = async () => {
    const res = await getKeywords(session?.token.data.token, 3);
    if (res) {
      const data = res.data.data.keywords;
      setMostKeywords(data);
    }
  };

  const fetchAllKeywords = async () => {
    const res = await getKeywords(session?.token.data.token);
    if (res) {
      const data = res.data.data.keywords;
      setKeywords(data);
    }
  };

  const fetchComplaintsByStatus = async (status) => {
    const res = await getComplaintsByStatus(session?.token.data.token, status);
    if (res) {
      const data = res.data.data.assignments;
      if (status === "DONE") setDoneComplaints(data);
      if (status === "IN_PROGRESS") setOnGoingComplaints(data);
      if (status === "ON_REVIEW") setOnReviewComplaints(data);
    }
  };

  const fetchLatestComplaints = async () => {
    const res = await getLatestComplaints(session?.token.data.token, 3);
    if (res) {
      const data = res.data.data.assignments;
      setLatestComplaints(data);
    }
  };

  const fetchComplaintsByDate = async () => {
    const res = await getLatestComplaintsByDate(session?.token.data.token, 5);
    if (res) {
      const data = res.data.data.assignments;
      setLatestComplaintsByDate(data);
    }
  };

  React.useEffect(() => {
    if (session?.token.data.token) {
      fetchMostKeywords();
      fetchAllKeywords();
      fetchComplaintsByStatus("DONE");
      fetchComplaintsByStatus("IN_PROGRESS");
      fetchComplaintsByStatus("ASSIGNED");
      fetchComplaintsByDate();
      fetchLatestComplaints();
    }
  }, [session?.token.data.token]);

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
          <div
            className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2`}
          >
            <StatsCard
              value={keywords.length}
              backgroundColor="bg-gradient-to-br from-rose-50 to-rose-200"
              iconColor="text-rose-500"
              icon={{ icon: KeyIcon }}
              title="Jumlah Kata Kunci"
              shadowColor="shadow-rose-300"
            />
            <StatsCard
              value={onReviewComplaints.length}
              backgroundColor="bg-gradient-to-br from-violet-50 to-violet-200"
              iconColor="text-violet-500"
              icon={{ icon: ArrowUpCircleIcon }}
              title="Tiket Ditugaskan"
              shadowColor="shadow-violet-300"
            />
            <StatsCard
              value={onGoingComplaints.length}
              backgroundColor="bg-gradient-to-br from-yellow-50 to-yellow-200"
              iconColor="text-amber-500"
              icon={{ icon: ClockIcon }}
              title="Tiket Dikerjakan"
              shadowColor="shadow-amber-300"
            />
            <StatsCard
              value={doneComplaints.length}
              backgroundColor="bg-gradient-to-br from-green-50 to-green-200"
              iconColor="text-green-500"
              icon={{ icon: CheckCircleIcon }}
              title="Tiket Diperiksa"
              shadowColor="shadow-green-300"
            />
          </div>
        </div>

        {/*Section 2*/}
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-5">
          {/* Charts Data Keluhan */}
          <Card className="col-span-4 border-0 shadow-md shadow-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Data Keluhan</CardTitle>
            </CardHeader>
            <ComplaintsChartsAdmin data={latestComplaintsByDate} />
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
              <RecentComplaints data={latestComplaints} />
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
              <MostKeyword data={mostKeywords} />
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
              Tiket
            </h3>
            <p className="text-sm text-muted-foreground">
              List tiket yang telah dibuat.
            </p>
          </div>
          <div className={`grid lg:grid-cols-3 col-span-4 gap-3`}>
            <StatsCard
              value={onReviewComplaints.length}
              backgroundColor="bg-white"
              iconColor="text-gray-900"
              icon={{ icon: ArrowUpCircleIcon }}
              title="Tiket Dibalas"
              shadowColor="shadow-gray-200"
            />
            <StatsCard
              value={onGoingComplaints.length}
              backgroundColor="bg-white"
              iconColor="text-gray-900"
              icon={{ icon: ClockIcon }}
              title="Tiket Dikerjakan"
              shadowColor="shadow-gray-200"
            />
            <StatsCard
              value={doneComplaints.length}
              backgroundColor="bg-white"
              iconColor="text-gray-900"
              icon={{ icon: CheckCircleIcon }}
              title="Tiket diperiksa"
              shadowColor="shadow-gray-200"
            />
          </div>
        </div>

        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Kelola Tim</CardTitle>
            <CardDescription>List pengerjaan tiket oleh tim.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <TeamsDataStats />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
