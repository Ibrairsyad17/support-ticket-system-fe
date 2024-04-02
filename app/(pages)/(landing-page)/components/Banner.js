import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ArrowButton from "@/app/(pages)/(landing-page)/components/ArrowButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-11/12 transition duration-300 antialiased mx-auto overflow-hidden">
      <div className="px-4 mx-auto">
        <Card className="p-6 border-none shadow-none bg-gradient-to-l from-emerald-100 to-emerald-300 mb-20">
          <CardContent>
            <div className="grid lg:grid-cols-7">
              <div className="flex flex-col lg:col-span-5 justify-center">
                <h4 className="text-md mt-2 text-gray-800 mb-2">
                  Yuk, Cobain Sekarang!
                </h4>
                <h1 className="max-w-2xl text-3xl font-bold tracking-wide my-1.5">
                  Selesaikan Keluhanmu Sekarang Juga Dengan Cara yang Lebih
                  Efisien dan Mudah{" "}
                </h1>
                <div className="flex mt-5">
                  <ArrowButton href={`/request-demo`}>Request Demo</ArrowButton>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600">
                    <Link href={`/contact`} className="ml-4">
                      Kontak kami
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="mt-8 lg:mt-0">
                  <div className="lg:col-span-5">
                    <img
                      className="rounded-xl shadow-xl shadow-emerald-300"
                      src="https://images.unsplash.com/photo-1622549037543-49cf1ca0babc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Banner;
