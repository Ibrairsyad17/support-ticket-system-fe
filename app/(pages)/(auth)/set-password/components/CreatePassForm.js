"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

function CreatePassForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      router.push("/set-password/create-success");
    }, 3000);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="mb-1 ml-1" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Type your email"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={true}
            className="my-1"
            value={`ibrairsyad17@gmail.com`}
          />
          <Label className="mb-1 mt-2 ml-1" htmlFor="pass">
            Kata sandi
          </Label>
          <Input
            id="pass"
            placeholder="Ketik kata sandi anda"
            type="password"
            autoCorrect="off"
            disabled={isLoading}
            className="my-1"
          />
          <Label className="mb-1 mt-2 ml-1" htmlFor="pass">
            Konfirmasi kata sandi
          </Label>
          <Input
            id="confirm-password"
            placeholder="Konfirmasi kata sandi anda"
            type="password"
            autoCorrect="off"
            disabled={isLoading}
            className="my-1"
          />
        </div>
        <div className="flex justify-between align-center mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Biarkan saya tetap log in
            </label>
          </div>
        </div>
        <Button disabled={isLoading} className="my-3">
          {isLoading && (
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
          )}
          Lanjutkan
        </Button>
      </div>
    </form>
  );
}

export default CreatePassForm;
