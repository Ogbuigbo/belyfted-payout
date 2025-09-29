/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://sheqelpay.com/api/v1/merchant/auth/:path*",
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

