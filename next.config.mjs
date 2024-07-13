/** @type {import('next').NextConfig} */
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  // Other Next.js configuration options here
});

export default nextConfig;
