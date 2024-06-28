"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PhotoProfile = ({ data }) => {
  return (
    <Avatar className={"w-20 h-20"}>
      <AvatarImage src={data} alt="@shadcn" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  );
};

export default PhotoProfile;
