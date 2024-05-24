"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  return <div className="lg:ps-72 pr-5">Experimental</div>;
};

export default Page;
