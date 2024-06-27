"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { BASE_URL } from "@/app/utils/constant";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");

  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const onSubmit = async (data) => {
    if (data.new_password !== data.confirm_password) {
      toast({
        title: "Gagal Mengubah Kata Sandi",
        variant: "destructive",
        description:
          "Kata sandi baru dan konfirmasi kata sandi baru tidak sama",
      });
      console.log("Kata sandi baru dan konfirmasi kata sandi baru tidak sama");
    } else {
      const dataToSubmit = {
        new_password: data.new_password,
        confirm_password: data.confirm_password,
      };

      console.log(dataToSubmit);

      const res = await fetch(
        `${BASE_URL}/auth/reset-password?token=${token}&id=${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        },
      );

      if (res.status === 404) {
        toast({
          title: "Gagal Mengubah Kata Sandi",
          variant: "destructive",
          description: "URL yang anda terima sudah kadaluarsa",
        });
      } else {
        toast({
          title: "Kata Sandi Berhasil Diubah",
          variant: "success",
          description: "Berhasil mengubah kata sandi",
        });
        data.new_password = "";
        data.confirm_password = "";
        router.push("reset-password/reset-success");
      }
    }
  };

  return (
    <main className="w-full max-w-xl mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 ">
              Atur ulang kata sandi
            </h1>
            <h1 className="mt-2 text-xs text-center text-gray-600 ">
              Kata sandi harus berbeda dengan kata sandi yang telah Anda gunakan
              sebelumnya.
            </h1>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <div className="mt-2 flex flex-col space-y-1.5">
                    <Label
                      htmlFor="confirm-password"
                      className="block text-sm mb-2 "
                    >
                      Masukkan kata sandi
                    </Label>
                    <div className="flex space-x-1">
                      <Input
                        id="new_password"
                        type={showOldPassword ? "text" : "password"}
                        placeholder="Masukkan kata sandi baru"
                        {...register("new_password", {
                          required: "Kolom ini wajib diisi",
                          minLength: {
                            value: 8,
                            message: "Kata sandi harus setidaknya 8 karakter",
                          },
                        })}
                      ></Input>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                      >
                        <EyeOpenIcon className="w-5 h-5" />
                      </Button>
                    </div>
                    {errors.new_password && (
                      <p className="text-red-600 text-sm">
                        {errors.new_password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="mt-2 flex flex-col space-y-1.5">
                    <Label
                      htmlFor="confirm-password"
                      className="block text-sm mb-2 "
                    >
                      Konfirmasi kata sandi
                    </Label>
                    <div className="flex space-x-1">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="Masukkan konfirmasi kata sandi baru"
                        {...register("confirm_password", {
                          required: "Kolom ini wajib diisi",
                          validate: (value) =>
                            value === getValues().new_password ||
                            "Kata sandi tidak cocok",
                        })}
                      ></Input>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <EyeOpenIcon className="w-5 h-5" />
                      </Button>
                    </div>
                    {errors.confirm_password && (
                      <p className="text-red-600 text-sm">
                        {errors.confirm_password.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full py-3 px-4 ">
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResetPasswordForm;
