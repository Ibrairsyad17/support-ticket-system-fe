/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "github.com"],
  },
  env:{
    BASE_URL:process.env.BASE_URL,
    BASE_URL_DEV:process.env.BASE_URL_DEV,
    NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
  },
};

export default nextConfig;
