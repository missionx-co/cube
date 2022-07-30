module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@cube-ui/components/dist/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@cube-ui/styles/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@cube-ui/foundation/dist/plugin'),
    require('@tailwindcss/typography'),
  ],
};
