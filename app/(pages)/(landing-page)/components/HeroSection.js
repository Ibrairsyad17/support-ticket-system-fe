import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white my-10 lg:my-20 antialiased grid-cols-1 grid px-4 lg:mx-auto lg:w-11/12 place-items-center overflow-hidden">
      <div className="max-w-screen-xl pt-8 mx-auto">
        <div className=" mx-auto grid lg:grid-cols-2">
          <h2 className="text-3xl font-bold md:text-3xl md:leading-tight col-span-1">
            Solusi Terpadu untuk Meningkatkan Efisiensi Karyawan.
          </h2>
          <p className="mt-1 text-md lg:text-lg text-gray-600 mb-3 col-span-1">
            Akses berbagai fitur penting dalam satu platform dari manajemen
            tiket hingga kolaborasi tim, komunikasi internal, dan akses data,
            semua tersedia dalam satu tempat.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl pt-8 mx-auto">
        <div className=" mx-auto grid xl:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl flex justify-center items-center">
            <Image
              className="size-2/3"
              width={500}
              height={500}
              src="/icon-lp-1.svg"
              alt="Image Description"
            />
            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-7 ">
                <h3 className="text-2xl font-bold text-gray-800 lg:mb-2">
                  Bekerja dengan efisien
                </h3>
                <p className="mt-1 text-gray-500">
                  Selesaikan berbagai keluhan dalam satu tempat penyelesaian
                  secara efisien.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl flex justify-center items-center">
            <Image
              className="size-2/3"
              width={500}
              height={500}
              src="/icon-lp-2.svg"
              alt="Image Description"
            />
            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-7 ">
                <h3 className="text-2xl font-bold text-gray-800 lg:mb-2">
                  Penyelesaian Nyata
                </h3>
                <p className="mt-1 text-gray-500">
                  Terbukti secara nyata membantu Anda agar pekerjaan lebih
                  terorganisir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
