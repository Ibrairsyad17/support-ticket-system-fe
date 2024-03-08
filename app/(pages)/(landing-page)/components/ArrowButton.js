import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ArrowButton({ children, href }) {
  return (
    <Button asChild>
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
