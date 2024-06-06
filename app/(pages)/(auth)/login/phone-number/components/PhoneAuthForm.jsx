"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useRouter } from "next/navigation";

import * as React from "react";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";
import { useDispatch } from "react-redux";
import { setOTP } from "@/app/redux/slices/otpSlice";
import { useToast } from "@/components/ui/use-toast";

export function PhoneAuthForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = React.useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const sendOTP = await axios.post(`${BASE_URL}/auth/otp/generate`, {
        email: email,
      });
      if (sendOTP.status === 200) {
        setIsLoading(false);
        dispatch(setOTP(email));
        router.push("/login/phone-number/otp-auth");
      } else if (sendOTP.status === 404) {
        setIsLoading(false);
        toast({
          title: "Email tidak ditemukan",
          variant: "destructive",
          description: "Email yang Anda masukkan tidak terdaftar",
          status: "error",
        });
        console.error("Error");
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Email tidak ditemukan",
        variant: "destructive",
        description: "Terjadi kesalahan, cek kembali email anda",
        status: "error",
      });
      console.error(error);
    }
  }

  return (
    <div className={"grid gap-6"}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-3">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Masukkan email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="py-5 mb-2"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
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
        mr-2 h-4 w-4 animate-spin py-5"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            )}
            Kirim Kode OTP
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Atau lanjutkan dengan
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <Button
          asChild
          variant="outline"
          type="button"
          disabled={isLoading}
          className=" py-5"
        >
          <Link href={`/login`}>
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
            Log in dengan Google
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          type="button"
          className="mt-3 py-5"
          disabled={isLoading}
        >
          <Link href={`/login`}>
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
              <EnvelopeIcon className="mr-2 h-4 w-4"></EnvelopeIcon>
            )}{" "}
            Log in dengan Email
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default PhoneAuthForm;
