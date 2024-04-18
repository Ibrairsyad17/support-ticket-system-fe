"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InstagramSyncForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="mb-1 ml-1" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Type your username or email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="my-1 py-5"
            />
            <Label className="mb-1 mt-2 ml-1" htmlFor="pass">
              Password
            </Label>
            <Input
              id="pass"
              placeholder="Type your password"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
              className="my-1 py-5"
            />
          </div>
          <Button disabled={isLoading} className="mt-2 py-5">
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
            Masuk
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InstagramSyncForm;
