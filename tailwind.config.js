/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#071014",
        ink: "#0b1620",
        ocean: "#18a9e6",
        electric: "#39c9ff",
        mint: "#57f0c2",
        ember: "#ffb84d",
        pulse: "#ff5f7e"
      },
      boxShadow: {
        glow: "0 28px 90px rgba(24, 169, 230, 0.24)",
        card: "0 24px 70px rgba(7, 16, 20, 0.14)"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "startup-grid":
          "linear-gradient(rgba(24,169,230,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(24,169,230,.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
