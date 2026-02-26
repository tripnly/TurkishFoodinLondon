/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for clean URLs
  trailingSlash: true,
}

module.exports = nextConfig
