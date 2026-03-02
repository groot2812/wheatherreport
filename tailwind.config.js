/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "glass-light": "rgba(255, 255, 255, 0.16)",
        "glass-dark": "rgba(15, 23, 42, 0.75)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite alternate",
        shimmer: "shimmer 1.8s ease-in-out infinite"
      },
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 100%" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-120% 0" },
          "100%": { backgroundPosition: "120% 0" }
        }
      }
    }
  },
  plugins: []
};

