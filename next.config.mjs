/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
