import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato, sans-serif"],
      nunito: ['"Nunito Sans"', "sans-serif"],
    },
    screens: {
      "3xs": "450px",

      "2xs": "500px",

      xs: "576px",

      sm: "600px",

      md: "767px",

      lg: "991px",

      xl: "1024px",

      "2xl": "1200px",

      "3xl": "1400px",
    },
    colors: {
      transparent: "transparent",
      "text-color": "#443737",
      white: "#fff",
      gray: "#dedede",
      "dark-gray": "#979797",
      "button-color": "#1e2f40",
      yellow: "#fbb731",
      orange: "#f37335",
      "black-navy": "#1b2a49",
      "border-footer": "#3e4e5e",
      black: "#000",
      red: "#ff0000",
      "black-overlay": "rgba(0,0,0,0.69)",
    },
    backgroundImage: {
      "hero-pattern":
        "linear-gradient(2.42deg, #f37335 -19.6%, #fbb731 100.79%, #fdc830 100.79%)",
      instruction: "linear-gradient(90deg, #f37735 0%, #f9a232 100%);",
      "footer-background":
        "radial-gradient(100% 100% at 50% 0%, #365368 0%, #1e2f40 100%)",
      "body-background": "url('/assets/images/body-background.png')",
      "chevron-down-bg": "url('/assets/images/icons/chevron-down.png')",
    },
    extend: {
      maxWidth: {
        sm: "540px",

        md: "720px",

        lg: "960px",

        xl: "1110px",

        "2xl": "1140px",
      },
      backgroundImage: {
        "radient-radial":
          "radial-gradient(100% 100% at 50% 0%, #0c4c7b 0%, #1e2f40 100%)",
        "linear-gradient":
          "linear-gradient(2.42deg, #f37335 -19.6%, #fbb731 100.79%, #fdc830 100.79%)",
      },
    },
  },
  plugins: [],
};
export default config
