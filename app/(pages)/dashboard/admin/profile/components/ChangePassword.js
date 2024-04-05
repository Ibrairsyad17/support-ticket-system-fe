import React from "react";
import { Button } from "@/components/ui/button";
import ChangePasswordForm from "@/app/(pages)/dashboard/admin/profile/components/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <form>
      <div className="space-y-12 border-b border-gray-900/10">
        <div className="grid lg:grid-cols-2">
          <ChangePasswordForm></ChangePasswordForm>
        </div>
      </div>

      <div className="my-6 flex items-center gap-x-4">
        <Button
          variant="outline"
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default ChangePassword;
