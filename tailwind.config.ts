import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        primary : "#038C7F",
        secondary : "#F2C641",
        tertiary : {
          dark : "#F27404",
          light : "#F2C641"
        }
      },
      fontFamily : {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      }  
    },
  },
  plugins: [],
}
export default config
