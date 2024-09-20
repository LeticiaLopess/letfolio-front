import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          lighter: '#E6E0FF',
          light: '#C5BCFF',
          DEFAULT: '#A493FF',
          dark: '#8F7CFF',
          darker: '#7A5FFF',
        },
        secondary: {
          lighter: '#928DB7',
          light: '#474462',
          DEFAULT: '#201D37',
          dark: '#06050D',
          darker: '#030205',
        },
        azure: {
          lighter: '#FFFFFF',
          light: '#ECF6FF',
          DEFAULT: '#C4E5FF',
          dark: '#A0D4FF',
          darker: '#7BB6FF',
        },
        neutral: {
          lighter: '#FFFFFF',
          light: '#F5F5F5',
          DEFAULT: '#B0B0B0',
          dark: '#1A1A1A',
          darker: '#000000',
        },
        cloud: {
          lighter: '#E4E4E4',
          light: '#CBCBCB',
          DEFAULT: '#969696',
          dark: '#666666',
          darker: '#404040',
        },
      },
    },
  },
  plugins: [],
};
export default config;
