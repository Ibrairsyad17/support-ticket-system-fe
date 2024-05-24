"use client";
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
import ComplaintsChartsPIC from "@/app/(pages)/(dashboard)/pic/components/ComplaintsChartsPIC";
import LatestAssignment from "@/app/(pages)/(dashboard)/pic/components/LatestAssignment";
import { useSession } from "next-auth/react";
import { getUserInfo } from "@/app/api/repository/usersAndCompanyRepository";
import { getTicketsForPIC } from "@/app/api/repository/ticketRepository";
import LatestComplaintsSkeleton from "@/app/(pages)/(dashboard)/admin/components/LatestComplaintsSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import StatsCard from "@/app/(pages)/(dashboard)/admin/components/StatsCard";
import {
  ArrowUpCircleIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [tickets, setTickets] = React.useState([]);
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

  const fetchUserInfo = async () => {
    const res = await getUserInfo(session?.token.data.token);
    if (res) {
      setUserInfo(res.data.data);
      setIsLoading(false);
    }
  };

  const fetchTicketsByPIC = async (id) => {
    const res = await getTicketsForPIC(session?.token.data.token, id);
    if (res) {
      setTickets(res.data.data.assignments);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchUserInfo();
    }
  }, [session?.token.data.token]);

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchTicketsByPIC(userInfo.id);
    }
  }, [userInfo.id]);

  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 grid grid-cols-1">
        {/* Header Section */}
        <div className="col-span-1 grid-cols-1 h-auto">
          <header className={`mb-3`}>
            <p className="mb-2 text-sm font-semibold text-amber-400">
              Halo, {userInfo.name} 👋
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
            {isLoading ? (
              <div className="flex flex-col space-y-4 w-8/12 mx-auto items-center pt-20">
                <Loader2 className="animate-spin w-10 h-10 text-gray-600 font-thin" />
                <p className="text-gray-400 font-normal">Memuat Data</p>
              </div>
            ) : (
              <ComplaintsChartsPIC data={tickets} />
            )}
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
              {isLoading ? (
                <LatestComplaintsSkeleton />
              ) : (
                <LatestAssignment data={tickets} />
              )}
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
          {isLoading ? (
            <div className={`grid lg:grid-cols-3 col-span-4 gap-3`}>
              <Skeleton className="rounded-xl bg-gray-50 shadow h-24" />
              <Skeleton className="rounded-xl bg-gray-50 shadow h-24" />
              <Skeleton className="rounded-xl bg-gray-50 shadow h-24" />
            </div>
          ) : (
            <div className={`grid lg:grid-cols-3 col-span-4 gap-3`}>
              <StatsCard
                value={
                  tickets.filter((ticket) => ticket.status === "ASSIGNED")
                    .length
                }
                backgroundColor="bg-white"
                iconColor="text-gray-900"
                icon={{ icon: ArrowUpCircleIcon }}
                title="Tiket Ditugaskan"
                shadowColor="shadow-gray-200"
              />
              <StatsCard
                value={
                  tickets.filter((ticket) => ticket.status === "IN_PROGRESS")
                    .length
                }
                backgroundColor="bg-white"
                iconColor="text-gray-900"
                icon={{ icon: ClockIcon }}
                title="Tiket Dikerjakan"
                shadowColor="shadow-gray-200"
              />
              <StatsCard
                value={
                  tickets.filter((ticket) => ticket.status === "CHECKED").length
                }
                backgroundColor="bg-white"
                iconColor="text-gray-900"
                icon={{ icon: CheckCircleIcon }}
                title="Tiket diperiksa"
                shadowColor="shadow-gray-200"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
