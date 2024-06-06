import { Inter } from "next/font/google";
import "../../../globals.css";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Navbar from "@/app/(pages)/(landing-page)/components/Navbar";
import StoreProvider from "@/app/redux/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Log in | Helpmate",
  description: "Log in dengan akun email untuk mengakses Helpmate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <main>
            <Navbar></Navbar>
            <div className="container relative flex-col items-start justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
              <div className="relative h-screen bg-gray-100 hidden flex-col px-28 pt-10 lg:flex ">
                <h1
                  style={{ lineHeight: 1.4 }}
                  className="max-w-xl mb-4 text-4xl tracking-wide font-bold md:text-4xl"
                >
                  Penyelesaian Nyata{" "}
                  <Badge className="lg:rounded-xl lg:px-4 lg:py-2 bg-emerald-50 shadow-none hover:bg-emerald-50">
                    <ArrowUpRightIcon className="h-6 text-emerald-500 border-none" />
                  </Badge>{" "}
                  <br />
                  <span>Untuk</span> Berbagai Keluhan dalam{" "}
                  <span className="text-emerald-500">Satu Platform</span>
                </h1>
                <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg">
                  Selesaikan kendala dalam satu tempat penyelesaian yang nyata
                  dan efisien.
                </p>
                <div className="flex justify-center items-center">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/lp-1.svg"
                    className="mx-auto my-5"
                    alt="mockup"
                  />
                </div>
              </div>
              {children}
            </div>
          </main>
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
