"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import MediaSection from "./components/MediaSection";
import ArrowButton from "./components/ArrowButton";
import Features from "./components/Features";
import FreAQ from "./components/FrequentlyAQ";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <main className="">
      <Navbar></Navbar>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
              <ReactTyped
                strings={["Menghemat waktu di media sosial bersama Fixit."]}
                typeSpeed={50}
                loop
                backSpeed={5}
                cursorChar=" _"
              ></ReactTyped>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Bantu karyawanmu untuk memudahkan pekerjaannya dan menghemat waktu
              dengan hasil nyata sekarang juga.
            </p>
            <ArrowButton href={`/login`}>Request Demo</ArrowButton>
            <Button asChild variant="outline">
              <Link href={`/contact`} className="ml-4">
                Kontak kami
              </Link>
            </Button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{ width: "100%", height: "auto" }}
              src="/business-analysis.svg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <MediaSection></MediaSection>
      <Features></Features>
      <FreAQ></FreAQ>
    </main>
  );
};

export default Home;
