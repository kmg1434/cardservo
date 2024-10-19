import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sky: {
          200: '#aad4f0',
          300: '#aad4f0',
          400: '#aad4f0',
          500: '#bfa094',
          600: '#2e879f',
          700: '#2e879f',
          800: '#141641',
          900: '#141641',
        },
        yellow: {
          300: '#f8fc15',
          400: '#f8fc15',
          500: '#a97c14',
          600: '#a97c14',
          700: '#a97c14',
        },
        red: {
          600: '#ab280c',
          700: '#ab280c',
        },
        orange: {
          600: '#a97c14',
          700: '#a97c14',
        }
      },
    },
  },
  plugins: [],
};
export default config;
