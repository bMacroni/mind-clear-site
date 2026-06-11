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
  async redirects() {
    return [
      {
        source: '/case-studies/mind-clear',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
