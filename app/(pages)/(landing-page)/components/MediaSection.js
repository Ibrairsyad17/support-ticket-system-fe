import React from "react";
import { Instagram, X, WhatsApp } from "@mui/icons-material";
import ArrowButton from "@/app/(pages)/(landing-page)/components/ArrowButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const media = [
  {
    id: 1,
    title: "Instagram",
    icon: Instagram,
    backgroundColor: "bg-gradient-to-br from-red-100 to-red-200",
    textColor: "text-red-500",
    shadowColor: "shadow-red-300",
  },
  {
    id: 2,
    title: "X (Twitter)",
    icon: X,
    backgroundColor: "bg-gradient-to-br from-indigo-100 to-indigo-200",
    textColor: "text-indigo-500",
    shadowColor: "shadow-indigo-300",
  },
  {
    id: 3,
    title: "WhatsApp",
    icon: WhatsApp,
    backgroundColor: "bg-gradient-to-br from-green-100 to-green-200",
    textColor: "text-green-500",
    shadowColor: "shadow-green-300",
  },
];

function MediaSection() {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl pl-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5">
          <h1 className="max-w-lg mb-4 text-4xl tracking-wider lg:leading-7 font-bold md:text-2xl xl:text-3xl">
            Kelola Seluruh Jaringan Sosial Anda dengan Lebih Mudah, Semua dalam
            Satu Tempat
          </h1>
          <p className="max-w-2xl mb-6 font-light text-sm text-gray-500 lg:mb-8 md:text-md lg:text-lg ">
            Dengan platform kami, Anda dapat menyelesaikan berbagai keluhan
            dalam satu tempat dengan penyelesaian yang nyata dan efisien.
          </p>
          <ArrowButton href={`/request-demo`}>Request Demo</ArrowButton>
          <Button asChild variant="outline">
            <Link href={`/contact`} className="ml-4">
              Kontak kami
            </Link>
          </Button>
        </div>
        <Card className="col-span-7 mt-6 lg:mt-0 border-0 shadow-md shadow-gray-100 bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-xl">Platform</CardTitle>
            <CardDescription className="text-gray-300">
              Koneksikan seluruh platform anda dalam satu website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {media.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.backgroundColor} shadow-md shadow-gray-800 rounded-xl`}
                >
                  <div className="p-4 md:p-5 flex flex-col gap-y-4">
                    <div
                      className={`flex-shrink-0 flex justify-center mr-1.5 items-center size-[42px] bg-white shadow-md shadow-gray-100 rounded-lg ${m.shadowColor}`}
                    >
                      <m.icon
                        className={`w-6 h-6 flex-shrink-0 size-5 ${m.textColor}`}
                      />
                    </div>

                    <div className="grow">
                      <div className="flex items-center gap-x-2">
                        <p className="text-xl font-bold tracking-wide text-gray-900">
                          {m.title}
                        </p>
                      </div>
                      <div className="mt-1 flex items-center gap-x-2">
                        <h3 className="text-xs sm:text-xs text-gray-800">
                          Hubungkan dengan {m.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default MediaSection;
