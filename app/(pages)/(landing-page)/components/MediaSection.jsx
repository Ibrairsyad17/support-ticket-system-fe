import React from "react";
import ArrowButton from "@/app/(pages)/(landing-page)/components/ArrowButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
function MediaSection() {
  return (
    <section className="bg-white">
      <div className="grid max-w-[85rem] pl-4 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-3xl lg:leading-7 font-bold md:text-2xl xl:text-4xl">
            Kelola Seluruh Jaringan Sosial Anda Dengan Lebih Mudah, Semua Dalam
            Satu Tempat
          </h1>
          <p className="max-w-2xl mb-6 font-light text-sm text-gray-500 lg:mb-8 md:text-md lg:text-lg ">
            Dengan platform kami, anda dapat menyelesaikan berbagai keluhan
            dalam satu tempat dengan penyelesaian yang nyata dan efisien.
          </p>
          <ArrowButton href={`/request-demo`}>Request Demo</ArrowButton>
          <Button asChild variant="outline">
            <Link href={`/contact`} className="ml-4">
              Kontak kami
            </Link>
          </Button>
        </div>
        <div className="col-span-5 lg:block hidden">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{ width: "95%", height: "auto" }}
            src="/assets/img/lp-7.svg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
