import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "61fxn1dsq7.ucarecd.net",
      },
    ],
  },
};

export default nextConfig;
