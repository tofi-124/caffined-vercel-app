import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: '0.7rem',
        sm: '0.8rem',
        base: '1.375rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3.5rem',
        '4xl': '4rem',
        '5xl': '4.5rem',
        '6xl': '6rem',

      },
      colors: {
        'primary' : '#FFF9F5',
        'black': '#000',
        'dark': '#1B3A4B',
        'white': '#FFF',
        'accent': '#E07B58',
        'secondary': '#4A9B9B'
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'inconsolata': ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
