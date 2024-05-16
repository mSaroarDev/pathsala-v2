/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangla: ["bangla", "sans-serrif"],
      },
      colors: {
        body: "#F0F0F1",
        darkBg: "#1D2327",
        lightBg: "#F6F7F7",
        primaryColor: "#005C91",
        borderColor: "#ddd",
      },
    },
  },
  plugins: [],
};
