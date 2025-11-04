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
        border: "hsl(0 0% 89.8%)",
        // Nature-inspired color palette
        forest: "#1A5D4A", // Deep Forest Green
        "forest-light": "#2a7d63",
        "forest-dark": "#134038",
        mint: "#A8E6CF", // Fresh Mint
        "mint-light": "#c8f3e1",
        "mint-dark": "#7dd4b1",
        sky: "#87CEEB", // Sunny Sky Blue
        "sky-light": "#b3deee",
        "sky-dark": "#5eb3cd",
        sunset: "#FFB84D", // Warm Sunrise Orange
        "sunset-light": "#ffc970",
        "sunset-dark": "#ff9d1a",
        cloud: "#F8FDFC", // Soft Cloud White
        charcoal: "#2D3436", // Charcoal Text
        "charcoal-light": "#636e72",
        "charcoal-dark": "#1e2426",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;



