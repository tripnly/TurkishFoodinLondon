/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Vercel
  output: 'export',
  
  // Image optimization (disable for static export, or configure for Vercel)
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for clean URLs
  trailingSlash: true,
}

module.exports = nextConfig
