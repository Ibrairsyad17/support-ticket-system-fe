import React from "react";
import RequestDemoForm from "@/app/(pages)/(landing-page)/request-demo/components/RequestDemoForm";
import Image from "next/image";

const RequestDemoPage = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <RequestDemoForm></RequestDemoForm>
        <div className={`flex flex-col`}>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl lg:leading-tight">
            Bantu semuanya dengan Helfix.
          </h1>
          <p className="mt-1 md:text-md text-gray-800">
            We help brands and platforms turn big ideas into beautiful digital
            products and experiences.
          </p>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{ width: "65%", height: "auto" }}
            src="/paper-documents.svg"
            alt="mockup"
            className={`self-center`}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestDemoPage;
