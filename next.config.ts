import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/research",
        destination: "/#research",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
