/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    serverComponentsExternalPackages: ['puppeteer', 'puppeteer-cluster']
  }
}

export default nextConfig 