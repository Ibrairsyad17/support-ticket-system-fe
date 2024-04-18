import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpInstagramInput = () => {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="my-4">
        <InputOTPSlot className="lg:p-6" index={0} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot className="lg:p-6" index={1} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot className="lg:p-6" index={2} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot className="lg:p-6" index={3} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot className="lg:p-6" index={4} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot className="lg:p-6" index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OtpInstagramInput;
