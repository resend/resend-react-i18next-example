import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: '/',
        statusCode: 302,
        destination: '/en',
      },
    ];
  },
};

export default nextConfig;
