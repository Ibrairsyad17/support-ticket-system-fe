import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    title:
      "Bagaimana Helptix membantu tim Anda dalam menangani keluhan pelanggan?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title:
      "Bagaimana aplikasi tersebut mempengaruhi efisiensi dan responsivitas tim Anda?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title:
      "Apa fitur utama yang Anda temukan paling berguna dalam aplikasi Helptix?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title:
      "Apa langkah-langkah untuk membuat dan menangani tiket keluhan melalui aplikasi Helptix?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title:
      "Apa keunggulan utama dari aplikasi Helptix kami dibandingkan dengan solusi sejenis lainnya?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

function FreAQ() {
  return (
    <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
      <div className=" mb-10 lg:mb-14">
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
      </div>
    </div>
  );
}

export default FreAQ;
