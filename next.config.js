/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/delete-account.html',
        destination: '/delete-account',
      },
    ];
  },
}

module.exports = nextConfig
