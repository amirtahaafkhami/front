/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "JetbrainsMono": "Jetbrains Mono", "IosevkaSlab": "Iosevka Slab" },
      colors: {
        "primary": "#21252B",
        "secondary": "#9DA5B4",
        "tertiary": "#282C34",
        "selector": "#D19A66",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}

