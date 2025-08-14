import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    typescript: {
        // Bỏ qua kiểm tra kiểu trong quá trình build
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
