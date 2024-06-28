"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BASE_URL } from "@/app/utils/constant";

const PhotoProfile = ({ data }) => {
  return (
    <Avatar className={"w-20 h-20"}>
      <AvatarImage src={`${BASE_URL}/${data}`} alt="User" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  );
};

export default PhotoProfile;
