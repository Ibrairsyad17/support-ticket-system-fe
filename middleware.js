import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    console.log("token: ", req.nextauth.token.data.role);
    if (
      req.nextUrl.pathname.startsWith("/pic") &&
      req.nextauth.token.data.role === "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.nextUrl));
    }
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token.data.role === "PIC"
    ) {
      return NextResponse.redirect(new URL("/pic/dashboard", req.nextUrl));
    }
    if (
      req.nextUrl.pathname.startsWith("/chats") &&
      req.nextauth.token.data.role === "PIC"
    ) {
      return NextResponse.redirect(new URL("/pic/dashboard", req.nextUrl));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ["/admin/:path*", "/chats/:path*", "/pic/:path*"],
};
