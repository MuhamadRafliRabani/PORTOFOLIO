/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"], // Pastikan domain ada di sini
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**", // Mengizinkan semua gambar dari placehold.co
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**", // Mengizinkan semua gambar dari placehold.co
      },
    ],
  },
};

export default nextConfig;
