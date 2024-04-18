import React from "react";
import RequestDemoForm from "@/app/(pages)/(landing-page)/request-demo/components/RequestDemoForm";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Badge } from "@/components/ui/badge";

const RequestDemoPage = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto lg:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-14 gap-y-0">
        <div className={`hidden lg:flex flex-col`}>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl lg:leading-tight">
            Temukan Potensi <span className="text-emerald-600">Helptix</span>{" "}
            <br />
            Untuk Bisnis Anda{" "}
            <Badge className="lg:rounded-xl lg:px-4 lg:py-2 bg-emerald-50 shadow-none hover:bg-emerald-50">
              <ArrowUpRightIcon className="h-6 text-emerald-500 border-none" />
            </Badge>
          </h1>
          <p className="my-5 md:text-md text-gray-800">
            We help brands and platforms turn big ideas into beautiful digital
            products and experiences.
          </p>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{ width: "65%", height: "auto" }}
            src="/lp-8.svg"
            alt="mockup"
            className={`self-center`}
          />
        </div>
        <RequestDemoForm></RequestDemoForm>
      </div>
    </div>
  );
};

export default RequestDemoPage;
