import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { BASE_URL } from "@/app/utils/constant";

export const authConfig = {
  providers: [
    GoogleProvider({
      id: "google",
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          // scope:
          //   "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const res = await fetch(`${BASE_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: "otp",
      name: "OTP",
      credentials: {
        email: { label: "Email", type: "email" },
        token: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        const { email, token } = credentials;
        const res = await fetch(`${BASE_URL}/auth/otp/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, token }),
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 86400,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "google") {
        const res = await fetch(`${BASE_URL}/auth/google`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${account.id_token}`,
          },
        });

        user = await res.json();
        return { ...token, ...user };
      } else {
        return { ...token, ...user };
      }
    },
    async session(session, token, user) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
