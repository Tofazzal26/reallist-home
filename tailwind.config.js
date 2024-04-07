/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        loginSd: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
};
