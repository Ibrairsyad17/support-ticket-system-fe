"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import PasswordIcon from "@mui/icons-material/Password";
import { forgotPassword } from "@/app/api/repository/usersAndCompanyRepository";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function ResetPage() {
  const [email, setEmail] = React.useState("");
  const { toast } = useToast();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
    };

    const res = await forgotPassword(data);
    if (res == 404) {
      toast({
        title: "Email tidak ditemukan",
        description: "Email yang anda masukkan tidak terdaftar",
        variant: "destructive",
      });
    } else {
      router.push("/forgot-password/sent");
    }
  };

  return (
    <>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-lg shadow-sm ">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <PasswordIcon
                style={{ fontSize: 50, fill: "#f59e0b" }}
                className="mx-auto mb-4"
              ></PasswordIcon>
              <h1 className="block text-2xl font-bold text-gray-800 ">
                Atur ulang kata sandi
              </h1>
              <p className="my-4 text-xs text-gray-600 ">
                Masukkan alamat e-mail yang terdaftar. Kami akan mengirimkan
                link untuk atur ulang kata sandi.
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <Label htmlFor="email" className="sr-only text-sm">
                      Alamat email atau nomor HP
                    </Label>
                    <div className="relative">
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Masukkan alamat email"
                        required
                        aria-describedby="email-error"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  disabled:opacity-50 disabled:pointer-events-none "
                  >
                    Kirim tautan
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPage;
