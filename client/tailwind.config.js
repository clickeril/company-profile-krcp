/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E9521B", // Warna dari brand KRCP
        secondary: "#0297DB",
        tertiary: "#828385",
        accent: "#E9521B",
      },
    },
  },
  plugins: [],
};
