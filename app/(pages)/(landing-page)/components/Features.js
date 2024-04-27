import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeatureContent from "@/app/(pages)/(landing-page)/components/FeatureContent";

const featuresDetails = [
  {
    id: "ticket",
    title: "Optimalkan Penanganan Keluhan Lebih Terstruktur dengan Fitur Tiket",
    image: "/assets/img/lp-2.svg",
    features: [
      "Kolaborasi tim menjadi lebih mudah dalam menemukan solusi.",
      "Kustomisasi formulir tiket",
      "Penambahan fitur komentar untuk memudahkan komunikasi.",
    ],
  },
  {
    id: "platform",
    title: "Efisiensi Bisnis Anda dengan Integrasi Platform yang Terpadu.",
    image: "/assets/img/lp-3.svg",
    features: [
      "Integrasi platform WhatsApp, X(Twitter) dan Instagram",
      "Hubungkan dengan Fitur Link Akun, Tanpa Perlu Membuka Satu Persatu",
    ],
  },
  {
    id: "inbox",
    title: "Komunikasi Lebih Lancar untuk Bertukar Pesan",
    image: "/assets/img/lp-4.svg",
    features: [
      "Komunikasi lebih terorganisir dengan pengkategorian pesan",
      "Kenali pelanggan dengan informasi data pelanggan yang tertera",
    ],
  },
  {
    id: "dynamic",
    title: "Pengelolaan Data dengan Visualisasi Interaktif dan Real-Time",
    image: "/assets/img/lp-5.svg",
    features: [
      "Ketahui data dan informasi lebih dalam terkait tiketmu",
      "Grafik Dinamis untuk Visualisasi Data yang Lebih Menyeluruh",
      "Tampilkan Data Sesuai Kebutuhan Anda dengan Pengaturan Tanggal yang Fleksibel",
    ],
  },
  {
    id: "easy",
    title:
      "Pencarian Data Keluhan Lebih Mudah dengan Pengkategorian Kata Kunci",
    image: "/assets/img/lp-6.svg",
    features: [
      "Mudah mencari dengan pengkategorian yang berisi kata kunci yang Anda inputkan",
    ],
  },
];

function Features() {
  return (
    <section className="bg-white lg:my-20 transition duration-300 antialiased grid-cols-1 grid mx-auto lg:w-10/12 w-11/12 place-items-center overflow-hidden">
      <div className="max-w-[85rem] px-4 pt-8 mx-auto lg:px-6">
        <div className="lg:text-center lg:max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold md:text-3xl md:leading-tight ">
            Layanan Terlengkap Untuk Mengatasi Keluhan Pelanggan Anda
          </h2>
          <p className="mt-3.5 text-lg text-gray-600 mb-3">
            Selesaikan berbagai keluhan dalam satu tempat penyelesaian yang
            nyata dan efisien.
          </p>
        </div>
      </div>
      <Tabs
        defaultValue="ticket"
        className="w-full place-items-center lg:flex lg:flex-col justify-center"
      >
        <TabsList className="bg-white lg:gap-x-14 flex flex-wrap">
          <TabsTrigger className="rounded-full px-5 my-2" value="ticket">
            Tiket Conversational
          </TabsTrigger>
          <TabsTrigger className="rounded-full px-5 my-2" value="platform">
            One Platform
          </TabsTrigger>
          <TabsTrigger className="rounded-full px-5 my-2" value="inbox">
            Inbox & Messaging
          </TabsTrigger>
          <TabsTrigger className="rounded-full px-5 my-2" value="dynamic">
            Dynamic Dashboard
          </TabsTrigger>
          <TabsTrigger className="rounded-full px-5 my-2" value="easy">
            Easily Search
          </TabsTrigger>
        </TabsList>
        {featuresDetails.map((feature, index) => (
          <TabsContent value={feature.id} key={index}>
            <FeatureContent data={feature}></FeatureContent>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default Features;
