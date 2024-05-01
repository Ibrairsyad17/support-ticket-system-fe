import Link from "next/link";
import React from "react";
import {
  CallOutlined,
  EmailOutlined,
  Instagram,
  WhatsApp,
  X,
} from "@mui/icons-material";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link href="#" className="">
            <span className="sr-only">Your Company</span>
            <Image
              src="/assets/img/logo-helptix.svg"
              alt={`Helptix Logo`}
              width="0"
              height="0"
              className="h-10 w-auto"
            />
          </Link>

          <p className="text-gray-900 font-bold my-3">Hubungi Kami:</p>

          <div className="flex space-x-4 my-4 items-center">
            <CallOutlined></CallOutlined>
            <div className="flex flex-col space-y-1.5">
              <p className="text-gray-500 text-sm">No. Handphone:</p>
              <p className="text-gray-500 text-sm font-semibold">08970837679</p>
            </div>
          </div>
          <div className="flex space-x-4 my-5 items-center">
            <EmailOutlined></EmailOutlined>
            <div className="flex flex-col space-y-1.5">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-gray-500 text-sm font-semibold">
                denxp@gmail.com
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-gray-600">
            © 2024 HelpTix.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Product
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 mt-2 text-gray-600 hover:text-gray-800"
                href="#"
              >
                Pricing
              </Link>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
              >
                Changelog
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 mt-2 hover:text-gray-800"
                href="#"
              >
                About us
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
              >
                Blog
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
              >
                Careers
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                href="#"
              >
                Customers
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Lainnya
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex gap-x-2 mt-2 text-gray-600 hover:text-gray-800"
                href="#"
              >
                FAQ
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase">
            Terhubung dengan kami:
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <div className="flex space-x-5 font-light mt-2">
              <Link href="">
                <Instagram className="hover:text-violet-600 transition duration-300"></Instagram>
              </Link>
              <Link href="">
                <WhatsApp className="hover:text-green-600 transition duration-300"></WhatsApp>
              </Link>
              <Link href="">
                <X className="hover:text-blue-600 transition duration-300"></X>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
