/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['image.tmdb.org', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;
