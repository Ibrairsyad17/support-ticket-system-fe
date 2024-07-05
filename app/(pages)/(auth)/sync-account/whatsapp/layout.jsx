"use client";

import SocketIoWAProvider from "@/context/SocketIOWA";

export default function RootLayout({ children }) {
  return <SocketIoWAProvider>{children}</SocketIoWAProvider>;
}
