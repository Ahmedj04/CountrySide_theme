/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://103.136.36.27:7860/:path*' // Proxy to Backend
      },
      {
        source: '/api2/:path*',
        destination: 'http://103.136.36.27:5555/:path*' // Proxy to Backend
      },
    ]
  },
}