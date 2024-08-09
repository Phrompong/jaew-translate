import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: "0px", max: "767px" },
        tablet: { min: "768px", max: "1080px" },
        desktop: { min: "1081px", max: "1440px" },
        desktopLarge: { min: "1441px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        header: "#262262",
        borderBox: "#00C89C",
        translated: "#343A40",
        modal: "#212529",
      },
    },
  },
  plugins: [],
};
export default config;
