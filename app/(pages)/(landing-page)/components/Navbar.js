"use client";

import { React, useEffect, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ArrowButton from "./ArrowButton";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      window.scrollY > 5 ? setScrolled(true) : setScrolled(false);
    };
  });

  return (
    <header
      className={`sticky top-0 l-0 backdrop-blur-md z-50 ${
        scrolled ? "shadow-md transition duration-300" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-[85rem] items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="/assets/img/logo-helptix.svg"
              alt={`Helptix Logo`}
              width="0"
              height="0"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="#"
            className="text-sm font-semibold leading-9 duration-300 transition hover:text-emerald-500 navbarLinks text-gray-900"
          >
            Beranda
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-9 duration-300 transition hover:text-emerald-500 navbarLinks text-gray-900"
          >
            Integrasi
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-9 duration-300 transition hover:text-emerald-500 navbarLinks text-gray-900"
          >
            Fitur
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-9 duration-300 transition hover:text-emerald-500 navbarLinks text-gray-900"
          >
            Hubungi Kami
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ArrowButton variant="outline" href={`/login`}>
            Masuk
          </ArrowButton>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={500}
                height={500}
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=red"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="text-sm font-semibold leading-9 -mx-3 block rounded-lg px-3 py-2 hover:text-emerald-500 navbarLinks text-gray-900"
                >
                  Beranda
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-9 -mx-3 block rounded-lg px-3 py-2 hover:text-emerald-500 navbarLinks text-gray-900"
                >
                  Integrasi
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-9 -mx-3 block rounded-lg px-3 py-2 hover:text-emerald-500 navbarLinks text-gray-900"
                >
                  Fitur
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-9 -mx-3 block rounded-lg px-3 py-2 hover:text-emerald-500 navbarLinks text-gray-900"
                >
                  Hubungi Kami
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
