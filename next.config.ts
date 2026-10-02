import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Admin noticia form uploads up to two images (downscaled client-side to <=4 MB total;
      // Vercel caps request bodies at 4.5 MB).
      bodySizeLimit: "4.5mb",
    },
  },
};

export default nextConfig;
