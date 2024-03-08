import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    title: "Is it accesible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

function FreAQ() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
          Frequently Asked Questions.
        </h2>
        <p className="mt-1 text-gray-600 mb-10">
          Jawaban dari beberapa pertanyaan yang sering diajukan.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {questions.map((q, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{q.title}</AccordionTrigger>
              <AccordionContent>{q.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FreAQ;
