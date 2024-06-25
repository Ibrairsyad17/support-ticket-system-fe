"use client";

import SocketIoWAProvider from "@/app/(pages)/(auth)/sync-account/whatsapp/SocketIOWA";

export default function RootLayout({ children }) {
  return <SocketIoWAProvider>{children}</SocketIoWAProvider>;
}
