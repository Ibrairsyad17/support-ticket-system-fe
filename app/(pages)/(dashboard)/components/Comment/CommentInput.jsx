import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const CommentInput = () => {
  return (
    <form className="w-full">
      <div className="w-full inline-flex space-x-2 rounded-lg border focus:border-none">
        <Input
          type="text"
          placeholder="Tulis Komentar..."
          className="border-none"
        />
        <Button size="icon" variant="ghost">
          <PaperPlaneIcon className="h-4 w-4 text-purple-600" />
        </Button>
      </div>
    </form>
  );
};

export default CommentInput;
