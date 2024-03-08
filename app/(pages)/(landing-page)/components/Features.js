import Link from "next/link";
import React from "react";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

const features = [
  {
    title: "Balas pelanggan anda",
    description:
      "Permudah karyawan anda dalam membalas keluhan pelanggan dengan satu aplikasi",
    icon: ForumOutlinedIcon,
  },
  {
    title: "Ticketing",
    description: "Tampung seluruh keluhan pelanggan dari berbagai divisi",
    icon: ConfirmationNumberOutlinedIcon,
  },
  {
    title: "Integration Account",
    description: "Akses mudah dengan integrasi dengan akun sosial media.",
    icon: AccountTreeOutlinedIcon,
  },
];

function Features() {
  return (
    <section className="bg-white antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 lg:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h6 className="text-2xl font-semibold leading-tight tracking-tight text-green-500">
            Fitur
          </h6>
          <p className="mt-4 text-base font-bold text-gray-900 sm:text-3xl ">
            Program Terlengkap Untuk Mengatasi Keluhan Pelanggan.
          </p>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            {features.map((f, index) => (
              <Link
                key={index}
                className="group flex gap-y-6 size-full hover:bg-gray-50 rounded-lg p-5 transition-all"
                href="#"
              >
                <div>
                  <div>
                    <f.icon
                      sx={{ strokeWidth: 0.5 }}
                      style={{ fill: "#16a34a" }}
                      className="flex-shrink-0 size-8 text-gray-800 mt-0.5 mb-4 me-6"
                    ></f.icon>
                    <h3 className="block font-bold text-gray-800 ">
                      {f.title}
                    </h3>
                    <p className="text-gray-600 ">{f.description}</p>
                  </div>

                  <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-green-500 ">
                    Learn more
                    <svg
                      className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
