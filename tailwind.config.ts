/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
export default <Partial<Config>>{
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        base: [
          '1rem',
          {
            lineHeight: '20px',
          },
        ],
        xxs: [
          '10px',
          {
            lineHeight: '7px',
          },
        ],
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: '#70F2B1',
          dark1: '#25262A',
          dark2: '#2D2E32',
          gray: '#6A7580',
        },
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      borderRadius: {
        20: '20px',
      },
    },
  },
  plugins: [],
}
