import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const SidebarContent = ({ listLink, pathname }) => {
  return (
    <ul className="space-y-2">
      {listLink.map((item, index) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <li key={index}>
            {item.type === "multi-link" ? (
              <Accordion type="single" className="w-full" collapsible>
                <AccordionItem
                  value={`item-${item.href}`}
                  className="border-none"
                >
                  <AccordionTrigger
                    className={`flex items-center justify-between ${isActive ? "font-semibold bg-muted" : "font-normal"} gap-x-4 py-2 px-3 text-sm text-slate-700 rounded-lg hover:bg-gray-100 bg-white w-full shadow-none cursor-pointer hover:no-underline`}
                  >
                    <div className="flex space-x-4">
                      {isActive ? (
                        <item.active className={`w-5 h-5`} />
                      ) : (
                        <item.icon className={`w-5 h-5`} />
                      )}
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <nav className="flex flex-col space-y-1 mx-3.5 mt-2 ">
                      {item.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`px-6 py-2 text-sm hover:bg-gray-100 rounded-md ${pathname === item.href ? "font-semibold bg-gray-100" : ""}`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </nav>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                className={`flex items-center gap-x-4 py-2 px-3 text-sm ${isActive ? "font-semibold bg-gray-100" : ""} text-slate-700 rounded-lg hover:bg-gray-100`}
                href={item.href}
              >
                {isActive ? (
                  <item.active className={`w-5 h-5`} />
                ) : (
                  <item.icon className={`w-5 h-5`} />
                )}

                {item.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarContent;
