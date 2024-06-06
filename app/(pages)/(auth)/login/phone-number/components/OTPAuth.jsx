"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";

const OTPAuthForm = ({ email }) => {
  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(data) {
    const verifyData = { ...data, email };

    try {
      const result = await signIn("otp", {
        redirect: true,
        callbackUrl: "/admin/dashboard",
        email: verifyData.email,
        token: verifyData.otp,
      });

      if (result.error) {
        toast({
          title: "Gagal Login",
          variant: "destructive",
          description: result.error,
          status: "error",
        });
      } else {
        toast({
          title: "Berhasil Login",
          variant: "success",
          status: "success",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="lg:p-6" />
                    <InputOTPSlot index={1} className="lg:p-6" />
                    <InputOTPSlot index={2} className="lg:p-6" />
                    <InputOTPSlot index={3} className="lg:p-6" />
                    <InputOTPSlot index={4} className="lg:p-6" />
                    <InputOTPSlot index={5} className="lg:p-6" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full">
          Verifikasi OTP
        </Button>
      </form>
    </Form>
  );
};

export default OTPAuthForm;
