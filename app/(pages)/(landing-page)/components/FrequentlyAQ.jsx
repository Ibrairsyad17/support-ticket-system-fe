"use client";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const questions = [
  {
    title:
      "Bagaimana Helptix membantu tim Anda dalam menangani keluhan pelanggan?",
    content:
      "Helptix mempermudah manajemen keluhan pelanggan dengan mengumpulkan semua laporan dalam satu platform. Dengan integrasi Instagram, WhatsApp, dan X, Anda dapat menyelesaikan berbagai keluhan hanya dengan satu genggaman.",
  },
  {
    title:
      "Bagaimana aplikasi tersebut mempengaruhi efisiensi dan responsivitas tim Anda?",
    content:
      "Setiap keluhan pelanggan langsung masuk ke sistem Helptix dan dapat segera ditugaskan ke tim yang tepat. Anda tidak perlu lagi mencari laporan manual, karena semua informasi tersedia dalam satu platform yang mudah diakses.",
  },
  {
    title:
      "Apa fitur utama yang Anda temukan paling berguna dalam aplikasi Helptix?",
    content:
      "Helptix menawarkan fitur unggulan seperti pelacakan tiket secara detail, notifikasi otomatis, dan integrasi dengan Instagram, WhatsApp, dan X. Anda bisa menerima dan membalas keluhan pelanggan langsung dari satu platform dengan mudah.",
  },
  {
    title:
      "Apa langkah-langkah untuk membuat dan menangani tiket keluhan melalui aplikasi Helptix?",
    content:
      "Pertama, masuk ke aplikasi dan pilah keluhan yang masuk berdasarkan kata kunci yang Anda buat. Setelah membalas pesan pelanggan dan mendapatkan detail keluhannya, buat tiket baru. Tiket tersebut kemudian dapat ditugaskan ke anggota tim PIC terkait. Tim bisa menambahkan catatan, lampiran, dan memperbarui status tiket untuk mencatat progres penanganan. Setelah keluhan ditangani, tiket dapat ditutup.",
  },
  {
    title:
      "Apa keunggulan utama dari aplikasi Helptix kami dibandingkan dengan solusi sejenis lainnya?",
    content:
      "Keunggulan utama Helptix adalah integrasi lengkap dengan Instagram, WhatsApp, dan X, yang memungkinkan penerimaan dan balasan keluhan langsung dari satu platform. Selain itu, Helptix menawarkan sistem pelacakan tiket yang mendetail, notifikasi otomatis untuk memastikan tim tetap up-to-date, serta fitur analisis data yang membantu memantau dan meningkatkan kinerja tim secara berkelanjutan.",
  },
];

function FreAQ() {
  const controlsText = useAnimation();

  const [textRef, inViewRef] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger the animation when 20% of the component is visible
  });

  useEffect(() => {
    if (inViewRef) {
      controlsText.start("visible");
    }
  }, [controlsText, inViewRef]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.7 } },
  };

  return (
    <div className="max-w-6xl pt-10 lg:pt-14 mx-auto">
      <motion.div
        className=" mb-10 lg:mb-14"
        ref={textRef}
        initial="hidden"
        animate={controlsText}
        variants={textVariants}
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
          Frequently Asked Questions.
        </h2>
        <p className="mt-1 text-gray-600 mb-10">
          Segera cek kumpulan pertanyaan mungkin kamu menemukan jawaban disini.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {questions.map((q, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-md font-semibold text-left">
                {q.title}
              </AccordionTrigger>
              <AccordionContent>{q.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}

export default FreAQ;
