import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white my-10 lg:my-20 antialiased grid-cols-1 grid px-4 lg:mx-auto lg:w-11/12 place-items-center overflow-hidden">
      <div className="max-w-screen-xl pt-8 mx-auto">
        <div className=" mx-auto grid lg:grid-cols-2">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight col-span-1">
            Solusi Terpadu untuk Meningkatkan Efisiensi Karyawan.
          </h2>
          <p className="mt-1 text-lg text-gray-600 mb-3 col-span-1">
            Akses berbagai fitur penting dalam satu platform dari manajemen
            tiket hingga kolaborasi tim, komunikasi internal, dan akses data,
            semua tersedia dalam satu tempat.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl pt-8 mx-auto">
        <div className=" mx-auto grid xl:grid-cols-2 gap-8">
          <div className="bg-white border rounded-xl shadow-sm sm:flex">
            <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
              <img
                className="size-full absolute top-0 start-0 object-cover"
                src="https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
            </div>
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

          <div className="bg-white border rounded-xl shadow-sm sm:flex">
            <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
              <img
                className="size-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1616588181775-138dc8ba4197?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
            </div>
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
