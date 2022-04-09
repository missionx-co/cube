const fs = require('fs');
const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');
const rehypePrettyCode = require('rehype-pretty-code');

const options = {
  theme: 'github-dark',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
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
