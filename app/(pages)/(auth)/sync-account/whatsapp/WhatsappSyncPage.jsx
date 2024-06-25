"use client";
import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useSocketWA } from "@/app/(pages)/(auth)/sync-account/whatsapp/SocketIOWA";
import { LoaderCircle } from "lucide-react";

const WhatsappSyncPage = () => {
  const [qrInfo, setQrInfo] = React.useState({});

  // Call websocket
  const sockets = useSocketWA();
  const socket = sockets ? sockets.whatsapp : null;

  React.useEffect(() => {
    if (socket) {
      socket.on("WHATSAPP_QR", async (data) => {
        setQrInfo(data);
      });
    }

    return () => {
      if (socket) {
        socket.off("WHATSAPP_QR");
      }
    };
  }, [socket]);

  return (
    <div className="max-w-5xl px-4 mx-auto grid lg:grid-cols-2 gap-5 mt-10">
      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl font-semibold text-gray-500 flex space-x-3.5 items-center">
          <span>Helptix</span>
          <ArrowPathIcon className="w-6 h-6 text-gray-500" />
          <div className="rounded-full w-8 h-8 text-white bg-emerald-600 flex justify-center items-center">
            <WhatsApp className="w-5 h-5" />
          </div>
        </h1>
        <p className="text-3xl font-bold text-gray-900">
          Hubungkan akun whatsapp Anda agar terhubung dengan Helptix.
        </p>
        <p className="text-xl font-semibold text-gray-900">
          Dengan terhubung maka Anda dapat:
        </p>
        <div>
          <ol className="list-decimal list-inside space-y-2.5 text-gray-800">
            <li>Dapat melihat chat akun Whatsapp Anda melalui Helptix.</li>
            <li>Dapat membalas chat akun Whatsapp Anda melalui Helptix.</li>
            <li>
              Dapat menghapus pesan chat akun Whatsapp Anda melalui Helptix.{" "}
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col space-y-5 items-end">
        <div className="w-full flex flex-col space-y-3 items-center">
          {qrInfo?.qr && (
            <Image
              src={qrInfo.qr}
              alt="QR Code"
              width={1000}
              height={1000}
              className="w-7/12 h-auto"
            />
          )}
          {!qrInfo?.qr && (
            <div className="w-72 h-72 bg-gray-200 flex justify-center items-center">
              <LoaderCircle className="animate-spin h-10 w-10 text-rose-600" />
            </div>
          )}
          <p className="text-lg font-medium text-gray-500 text-center">
            Pindai Kode QR
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsappSyncPage;
