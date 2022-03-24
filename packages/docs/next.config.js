const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withPlugins(
  [
    withTM,
    {
      transpileModules: ["react-syntax-highlighter"],
    },
  ],
  nextConfig
);
