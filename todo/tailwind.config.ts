import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms'
import ratio from '@tailwindcss/aspect-ratio'
import lineClamp from '@tailwindcss/line-clamp'
import daisyui from 'daisyui'

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
      },
    },
  },
  plugins: [
    forms({strategy: 'class'}),
    ratio,
    lineClamp,
    daisyui
  ],
};
export default config;