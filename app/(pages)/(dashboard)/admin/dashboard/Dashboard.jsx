"use client";
import React from "react";
import { DatePickerWithRange } from "@/app/(pages)/(dashboard)/components/DatePicker";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import TeamsDataStats from "@/app/(pages)/(dashboard)/admin/components/TeamsDataStats";
import { useSession } from "next-auth/react";
import { getKeywords } from "@/app/api/repository/keywordsRepository";
import StatsCard from "@/app/(pages)/(dashboard)/admin/components/StatsCard";
import {
  getComplaintsByPlatform,
  getComplaintsByStatus,
  getLatestComplaintsByDate,
} from "@/app/api/repository/complaintsRepository";
import { Instagram, WhatsApp, X } from "@mui/icons-material";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import LatestComplaintsSkeleton from "@/app/(pages)/(dashboard)/admin/components/LatestComplaintsSkeleton";

const Dashboard = () => {
  const { data: session } = useSession();
  const [doneComplaints, setDoneComplaints] = React.useState([]);
  const [onGoingComplaints, setOnGoingComplaints] = React.useState([]);
  const [assignedComplaints, setAssignedComplaints] = React.useState([]);
  const [checkedComplaints, setCheckedComplaints] = React.useState([]);
  const [latestComplaints, setLatestComplaints] = React.useState([]);
  const [latestComplaintsByDate, setLatestComplaintsByDate] = React.useState(
    [],
  );
  const [keywords, setKeywords] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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

  const fetchAllKeywords = async () => {
    const res = await getKeywords(session?.token.data.token);
    if (res) {
      const data = res.data.data.keywords;
      setKeywords(data);
      setIsLoading(false);
    }
  };

  const fetchComplaintsByStatus = async (status) => {
    const res = await getComplaintsByStatus(session?.token.data.token, status);
    if (res) {
      const data = res.data.data.assignments;
      if (status === "DONE") setDoneComplaints(data);
      if (status === "IN_PROGRESS") setOnGoingComplaints(data);
      if (status === "ASSIGNED") setAssignedComplaints(data);
      if (status === "CHECKED") setCheckedComplaints(data);

      setIsLoading(false);
    }
  };

  const fetchLatestComplaints = async () => {
    const res = await getComplaintsByPlatform(session?.token.data.token);
    if (res) {
      const data = res.data.data.assignments;
      setLatestComplaints(data);
      setIsLoading(false);
    }
  };

  const fetchComplaintsByDate = async () => {
    const res = await getLatestComplaintsByDate(session?.token.data.token, 10);
    if (res) {
      const data = res.data.data.assignments;
      setLatestComplaintsByDate(data);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchAllKeywords();
      fetchComplaintsByStatus("DONE");
      fetchComplaintsByStatus("IN_PROGRESS");
      fetchComplaintsByStatus("ASSIGNED");
      fetchComplaintsByStatus("CHECKED");
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
          {isLoading ? (
            <div
              className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2`}
            >
              <Skeleton className="rounded-xl bg-gray-100 h-24" />
              <Skeleton className="rounded-xl bg-gray-100 h-24" />
              <Skeleton className="rounded-xl bg-gray-100 h-24" />
              <Skeleton className="rounded-xl bg-gray-100 h-24" />
            </div>
          ) : (
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
                value={assignedComplaints.length}
                backgroundColor="bg-gradient-to-br from-violet-50 to-violet-200"
                iconColor="text-violet-500"
                icon={{ icon: ArrowUpCircleIcon }}
                title="Keluhan dibalas"
                shadowColor="shadow-violet-300"
              />
              <StatsCard
                value={onGoingComplaints.length}
                backgroundColor="bg-gradient-to-br from-yellow-50 to-yellow-200"
                iconColor="text-amber-500"
                icon={{ icon: ClockIcon }}
                title="Keluhan menunggu"
                shadowColor="shadow-amber-300"
              />
              <StatsCard
                value={doneComplaints.length}
                backgroundColor="bg-gradient-to-br from-green-50 to-green-200"
                iconColor="text-green-500"
                icon={{ icon: CheckCircleIcon }}
                title="Keluhan diselesaikan"
                shadowColor="shadow-green-300"
              />
            </div>
          )}
        </div>

        {/*Section 2*/}
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-5">
          {/* Charts Data Keluhan */}
          <Card className="col-span-4 border-0 shadow-md shadow-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Data Keluhan</CardTitle>
            </CardHeader>
            {isLoading ? (
              <div className="flex flex-col space-y-4 w-8/12 mx-auto items-center pt-20">
                <Loader2 className="animate-spin w-10 h-10 text-gray-600 font-thin" />
                <p className="text-gray-400 font-normal">Memuat Data</p>
              </div>
            ) : (
              <ComplaintsChartsAdmin data={latestComplaintsByDate} />
            )}
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
              {isLoading ? (
                <LatestComplaintsSkeleton />
              ) : (
                <RecentComplaints data={latestComplaints} />
              )}
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
            <CardContent className="pl-2 -mt-4">
              {isLoading ? (
                <div className="flex flex-col space-y-4">
                  <div class="inline-flex items-center gap-x-2 py-2.5 pl-4 text-sm font-medium bg-white justify-between text-gray-800 -mt-px">
                    <Skeleton className="h-3.5 w-32 bg-gray-100 rounded-full" />
                    <Skeleton className="h-3.5 w-6 bg-gray-100 rounded-full" />
                  </div>
                  <div class="inline-flex items-center gap-x-2 py-2.5 pl-4 text-sm font-medium bg-white justify-between text-gray-800 -mt-px">
                    <Skeleton className="h-3.5 w-32 bg-gray-100 rounded-full" />
                    <Skeleton className="h-3.5 w-6 bg-gray-100 rounded-full" />
                  </div>
                  <div class="inline-flex items-center gap-x-2 py-2.5 pl-4 text-sm font-medium bg-white justify-between text-gray-800 -mt-px">
                    <Skeleton className="h-3.5 w-32 bg-gray-100 rounded-full" />
                    <Skeleton className="h-3.5 w-6 bg-gray-100 rounded-full" />
                  </div>
                </div>
              ) : (
                <MostKeyword data={keywords} />
              )}
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
              {isLoading ? (
                <div
                  className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2`}
                >
                  <Skeleton className="rounded-xl bg-gray-100 h-24" />
                  <Skeleton className="rounded-xl bg-gray-100 h-24" />
                  <Skeleton className="rounded-xl bg-gray-100 h-24" />
                </div>
              ) : (
                <div
                  className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2`}
                >
                  <StatsCard
                    value={
                      latestComplaints.filter(
                        (l) =>
                          l.conversation_messages.conversations.social_media
                            .platform === "INSTAGRAM",
                      ).length
                    }
                    backgroundColor="bg-gradient-to-br from-fuchsia-100 to-fuchsia-200"
                    iconColor="text-fuchsia-500"
                    icon={{ icon: Instagram }}
                    title="Instagram"
                    shadowColor="shadow-fuchsia-300"
                    shadowBox={false}
                  />
                  <StatsCard
                    value={
                      latestComplaints.filter(
                        (l) =>
                          l.conversation_messages.conversations.social_media
                            .platform === "TWITTER",
                      ).length
                    }
                    backgroundColor="bg-gradient-to-br from-indigo-50 to-indigo-200"
                    iconColor="text-indigo-500"
                    icon={{ icon: X }}
                    title="X (Twitter)"
                    shadowColor="shadow-indigo-300"
                    shadowBox={false}
                  />
                  <StatsCard
                    value={
                      latestComplaints.filter(
                        (l) =>
                          l.conversation_messages.conversations.social_media
                            .platform === "WHATSAPP",
                      ).length
                    }
                    backgroundColor="bg-gradient-to-br from-green-50 to-green-200"
                    iconColor="text-green-500"
                    icon={{ icon: WhatsApp }}
                    title="WhatsApp"
                    shadowColor="shadow-green-300"
                    shadowBox={false}
                  />
                </div>
              )}
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
          {isLoading ? (
            <div className={`grid lg:grid-cols-3 col-span-4 gap-3`}>
              <Skeleton className="rounded-xl bg-gray-200 h-24" />
              <Skeleton className="rounded-xl bg-gray-200 h-24" />
              <Skeleton className="rounded-xl bg-gray-200 h-24" />
            </div>
          ) : (
            <div className={`grid lg:grid-cols-3 col-span-4 gap-3`}>
              <StatsCard
                value={assignedComplaints.length}
                backgroundColor="bg-white"
                iconColor="text-gray-900"
                icon={{ icon: ArrowUpCircleIcon }}
                title="Tiket Ditugaskan"
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
                value={checkedComplaints.length}
                backgroundColor="bg-white"
                iconColor="text-gray-900"
                icon={{ icon: CheckCircleIcon }}
                title="Tiket diperiksa"
                shadowColor="shadow-gray-200"
              />
            </div>
          )}
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