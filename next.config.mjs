/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/baidu",
        destination: "https://baidu.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
