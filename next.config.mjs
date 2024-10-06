/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "yt3.ggpht.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
    ],
  },
};

export default nextConfig;
