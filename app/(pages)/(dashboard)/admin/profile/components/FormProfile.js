import { Button } from "@/components/ui/button";
import CompanyForm from "@/app/(pages)/(dashboard)/admin/profile/components/CompanyForm";
import UserForm from "@/app/(pages)/(dashboard)/admin/profile/components/UserForm";

export default function FormProfile() {
  return (
    <form>
      <div className="space-y-12 border-b border-gray-900/10">
        <div className="grid lg:grid-cols-2 gap-x-5">
          <CompanyForm></CompanyForm>

          <UserForm></UserForm>
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
}
