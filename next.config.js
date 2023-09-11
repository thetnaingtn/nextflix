/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // disabled for static export. we don't have custom loader at the moment.
    domains: ['image.tmdb.org', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;
