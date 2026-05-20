import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-rubik)", "var(--font-heebo)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "pitch-body": ["1.25rem", { lineHeight: "1.85" }],
        "pitch-body-lg": ["1.375rem", { lineHeight: "1.9" }],
        "pitch-card": ["1.2rem", { lineHeight: "1.5" }],
        "pitch-card-lg": ["1.35rem", { lineHeight: "1.55" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
