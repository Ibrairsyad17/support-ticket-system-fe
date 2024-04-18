"use client";

import Image from "next/image";
import MediaSection from "./components/MediaSection";
import ArrowButton from "./components/ArrowButton";
import Features from "./components/Features";
import FreAQ from "./components/FrequentlyAQ";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import HeroSection from "@/app/(pages)/(landing-page)/components/HeroSection";
import Banner from "@/app/(pages)/(landing-page)/components/Banner";

const Home = () => {
  return (
    <>
      <section className="bg-white">
        <div className="grid max-w-[85rem] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl tracking-wide font-bold md:text-4xl xl:text-5xl">
              Penyelesaian Nyata{" "}
              <Badge className="lg:rounded-xl lg:px-4 lg:py-2 bg-emerald-50 shadow-none hover:bg-emerald-50">
                <ArrowUpRightIcon className="h-6 text-emerald-500 border-none" />
              </Badge>{" "}
              Untuk Berbagai Keluhan dalam{" "}
              <span className="text-emerald-500">Satu Platform</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Bantu karyawanmu untuk memudahkan pekerjaannya dan menghemat waktu
              dengan hasil nyata sekarang juga.
            </p>
            <ArrowButton href={`/request-demo`}>Request Demo</ArrowButton>
            <Button asChild variant="outline">
              <Link href={`/contact`} className="ml-4">
                Kontak kami
              </Link>
            </Button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-end drop-shadow-md">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{ width: "95%", height: "auto" }}
              src="/assets/img/lp-1.svg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <Features></Features>
      <MediaSection></MediaSection>
      <HeroSection></HeroSection>
      <FreAQ></FreAQ>
      <Banner></Banner>
    </>
  );
};

export default Home;
