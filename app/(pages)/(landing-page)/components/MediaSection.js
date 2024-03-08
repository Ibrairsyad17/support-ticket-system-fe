import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const media = [
  {
    title: "Instagram",
    icon: InstagramIcon,
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae.",
  },
  {
    title: "X (Twitter)",
    icon: XIcon,
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae.",
  },
  {
    title: "WhatsApp",
    icon: WhatsAppIcon,
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae.",
  },
];

function MediaSection() {
  return (
    <section className="bg-white antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 lg:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
            Semua Data dan Laporan Anda dalam Satu Tempat
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-lg ">
            Sederhanakan dan hemat waktu dengan mengintegrasikan data media
            sosial yang dapat dilacak dan balas komplain yang Anda terima dalam
            satu platform.
          </p>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
            {media.map((m) => (
              <div key={m.title}>
                <div className="relative flex justify-center items-center size-12 bg-white rounded-xl border-green-500 border-2 mx-auto">
                  <m.icon style={{ fill: "#22c55e" }}></m.icon>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg text-center font-semibold text-gray-800 ">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-center leading-7">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
