"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginIcon from "@mui/icons-material/Login";

function OTPAuthButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <Button disabled={isLoading} className="py-6">
      {isLoading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
          mr-2 h-4 w-4 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <LoginIcon style={{ fontSize: 18, margin: 7 }}></LoginIcon>
      )}{" "}
      Verifikasi kode OTP
    </Button>
  );
}

export default OTPAuthButton;
