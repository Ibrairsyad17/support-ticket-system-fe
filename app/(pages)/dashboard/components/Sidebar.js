import React from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ listLink }) => {
  return (
    <div>
      <div className="sticky top-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <Bars3Icon className={`w-5 h-5`} />
          </button>

          <ol
            className="ms-3 flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-green-500">
              Helptix
              <ChevronRightIcon
                className={`flex-shrink-0 mx-2 overflow-visible text-gray-400 w-4 h-4`}
              />
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-40 w-64 bg-white border-e border-gray-200 py-7 overflow-y-auto lg:flex lg:flex-col lg:justify-between lg:align-center lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 "
      >
        <div>
          <div className="px-7 pt-2">
            <a
              className="flex-none text-xl text-green-500 font-semibold "
              href="#"
              aria-label="Brand"
            >
              Helptix
            </a>
          </div>

          <nav className="hs-accordion-group px-7 py-4 w-full flex flex-col flex-wrap">
            <ul className="space-y-2">
              {listLink.map((item, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center gap-x-4 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100"
                    href={item.route}
                  >
                    <item.icon className={`w-5 h-5`} />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <p className="text-xs text-green-500 text-center">
            &#169; Copyright Helptix 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
