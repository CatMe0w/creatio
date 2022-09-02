module.exports = {
  content: [
    './public/index.html',
    './public/browse.html',
    './public/download.html',
    './src/**/*.{html,js,ts,svelte}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sevenseg': ['DSEG7 Classic']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  experimental: {
    optimizeUniversalDefaults: true
  },
}
