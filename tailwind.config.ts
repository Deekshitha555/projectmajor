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
        background: "var(--background)", // For dark theme background
        foreground: "var(--foreground)", // For content color
      },
      screens: {
        mobile: "320px", // Small mobile screens
        sm: "640px",    // Standard small screens
        md: "768px",    // Tablets
        lg: "1024px",   // Laptops
        xl: "1280px",   // Desktops
        "2xl": "1536px", // Large screens
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern, clean font
        display: ["Poppins", "sans-serif"], // Stylish for headings
      },
    },
  },
  plugins: [],
};

export default config;
