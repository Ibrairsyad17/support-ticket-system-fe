"use client";
import React, { Suspense } from "react";
import ResetPasswordForm from "@/app/(pages)/(auth)/reset-password/components/ResetPaswordForm";

function PassResetPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex min-h-[100dvh] items-center justify-center bg-background">
            <div className="space-y-4 text-center">
              <div className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        }
      >
        <ResetPasswordForm />
      </Suspense>
    </>
  );
}

export default PassResetPage;
