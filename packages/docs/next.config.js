const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

module.exports = withPlugins(
  [
    withTM,
    {
      transpileModules: ['react-syntax-highlighter'],
    },
    withMDX,
  ],
  nextConfig,
);
