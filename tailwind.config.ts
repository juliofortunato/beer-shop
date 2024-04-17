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
        "dove-gray": "#646464",
        "dusty-gray": "#969696",
        primary: "#FF9F24",
        silver: "#C4C4C4",
      },
      boxShadow: {
        nav: "0px 10px 50px 0px rgba(15, 13, 35, 0.37)",
      },
    },
  },
  plugins: [],
};
export default config;
