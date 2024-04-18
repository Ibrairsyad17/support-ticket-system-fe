import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ArrowButton({ children, href, variant }) {
  const pathname = usePathname();

  return (
    <Button
      asChild
      variant={variant}
      className={
        pathname === "/login" ||
        pathname === "/login/phone-number" ||
        pathname === "/login/phone-number/otp-auth"
          ? "hidden"
          : ""
      }
    >
      <Link href={href}>
        {children}{" "}
        <span aria-hidden="true" className="ml-1">
          &rarr;
        </span>
      </Link>
    </Button>
  );
}

export default ArrowButton;
