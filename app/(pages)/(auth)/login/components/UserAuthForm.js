"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function UserAuthForm({ className, ...props }) {
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
              placeholder="Type your email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="my-1"
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
              className="my-1"
            />
          </div>
          <Button disabled={isLoading} className="mt-2">
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
            Sign In with Email
          </Button>
          <div className="flex justify-between align-center mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Link
              href="/forgot-password"
              className="font-medium text-sm text-amber-500 hover:underline"
            >
              Lupa password?
            </Link>
          </div>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <Button variant="outline" asChild type="button" disabled={isLoading}>
          <Link href={`/login/phone-number`}>
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
              <GoogleIcon style={{ fontSize: 18, margin: 7 }}></GoogleIcon>
            )}{" "}
            Google
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          type="button"
          disabled={isLoading}
          className="mt-2"
        >
          <Link href={`/login/phone-number`}>
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
              <PhoneAndroidOutlinedIcon
                style={{ fontSize: 18, margin: 7 }}
              ></PhoneAndroidOutlinedIcon>
            )}{" "}
            Log in dengan OTP
          </Link>
        </Button>
      </div>
    </div>
  );
}
