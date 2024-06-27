"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { syncInstagramAccount } from "@/app/api/repository/usersAndCompanyRepository";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

const InstagramSyncForm = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = React.useState(false);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const router = useRouter();
  const { toast } = useToast();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      username: username,
      password: password,
    };

    try {
      const res = await syncInstagramAccount(session?.token.data.token, data);
      console.log(res.status);
      if (res.status === 200) {
        toast({
          title: "Berhasil masuk dengan akun Instagram",
          description: `Kamu masuk dengan akun Instagram ${username}`,
          variant: "success",
        });
        router.push("/admin/sync-account");
      } else {
        toast({
          title: "Gagal Sinkronisasi Akun Instagram Kamu",
          description: "Username atau password salah",
          variant: "destructive",
        });
        setIsLoading(false);
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="mb-1 ml-1" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Masukkan Username..."
              type="text"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="my-1 py-5"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Label className="mb-1 mt-2 ml-1" htmlFor="pass">
              Password
            </Label>
            <Input
              id="pass"
              placeholder="Masukkan Kata Sandi..."
              type="password"
              autoCorrect="off"
              disabled={isLoading}
              className="my-1 py-5"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <p className="text-red-500 mt-2">
                Maaf, kata sandi salah. Mohon periksa kembali kata sandi Anda.
              </p>
            )}
          </div>
          <Button disabled={isLoading} className="mt-2 py-5">
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
            mr-2 h-4 w-4 animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            )}
            Masuk
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InstagramSyncForm;
