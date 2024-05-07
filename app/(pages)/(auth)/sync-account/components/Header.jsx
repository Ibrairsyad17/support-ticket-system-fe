import React from "react";
import Link from "next/link";
import { ChevronLeft } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-6 border-b ">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          <Link href={"/admin/sync-account"}>
            <ChevronLeft className="w-7 h-7 text-gray-800" />
          </Link>
        </div>

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3"></div>

        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <p className="relative inline-block text-lg font-semibold hover:text-gray-900">
                Hubungkan Akun
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
