import React from "react";
import { Button } from "@/components/ui/button";
import ChangePasswordForm from "@/app/(pages)/(dashboard)/admin/profile/components/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <>
      <h2 className="text-md font-semibold text-gray-900 mb-1">
        Ubah Biodata Perusahaan
      </h2>
      <form>
        <ChangePasswordForm></ChangePasswordForm>

        <div className="flex items-center gap-x-4 -mt-2">
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
    </>
  );
};

export default ChangePassword;
