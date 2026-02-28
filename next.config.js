const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for clean URLs
  trailingSlash: true,

  // Explicitly set webpack alias for @/ path
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig