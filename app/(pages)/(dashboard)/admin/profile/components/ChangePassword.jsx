"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { changePassword } from "@/app/api/repository/usersAndCompanyRepository";

const ChangePassword = () => {
  const { toast } = useToast();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast({
        title: "Gagal Mengubah Kata Sandi",
        variant: "destructive",
        description:
          "Kata sandi baru dan konfirmasi kata sandi baru tidak sama",
      });
    } else {
      const dataToSubmit = {
        old_password: data.oldPassword,
        new_password: data.newPassword,
      };

      const res = await changePassword(dataToSubmit, session?.token.data.token);
      console.log(res);
      if (res.status === 200) {
        toast({
          title: "Kata Sandi Berhasil Diubah",
          variant: "success",
          description: "Berhasil mengubah kata sandi",
        });
        data.oldPassword = "";
        data.newPassword = "";
        data.confirmPassword = "";
      } else if (res.response.status === 404) {
        toast({
          title: "Gagal Mengubah Kata Sandi",
          variant: "destructive",
          description: "Kata sandi lama tidak sesuai",
        });
      }
    }
  };

  return (
    <>
      <h2 className="text-md font-semibold text-gray-900 mb-1">
        Ubah Kata Sandi
      </h2>
      <form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-8">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="oldPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Kata sandi lama
                </label>
                <div className="mt-2 flex flex-col space-y-2">
                  <div className="flex space-x-1">
                    <Input
                      id="oldPassword"
                      type={showOldPassword ? "text" : "password"}
                      placeholder="Masukkan kata sandi lama"
                      {...register("oldPassword", {
                        required: "Kolom ini wajib diisi",
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
                  {errors.oldPassword && (
                    <p className="text-red-600 text-sm">
                      Kolom ini wajib diisi
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Kata sandi baru
                </label>
                <div className="mt-2 flex flex-col space-y-2">
                  <div className="flex space-x-1">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Masukkan kata sandi baru"
                      {...register("newPassword", {
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
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      <EyeOpenIcon className="w-5 h-5" />
                    </Button>
                  </div>
                  {errors.newPassword && (
                    <p className="text-red-600 text-sm">
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Konfirmasi kata sandi baru
                </label>
                <div className="mt-2 flex flex-col space-y-2">
                  <div className="flex space-x-1">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Masukkan konfirmasi kata sandi baru"
                      {...register("confirmPassword", {
                        required: "Kolom ini wajib diisi",
                        validate: (value) =>
                          value === getValues().newPassword ||
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
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-4 -mt-2">
            <Button type="submit">Ganti Kata Sandi</Button>
          </div>
        </form>
      </form>
    </>
  );
};

export default ChangePassword;
