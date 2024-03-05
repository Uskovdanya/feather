/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: { max: "1050.99px" },
      sm: { max: "767.99px" },
      xs: { max: "479.99px" },
    },
    extend: {
      gridTemplateColumns: {
        sectionOne: "minmax(0, 523px) minmax(0, 628px)",
        sectionSix: "minmax(0, 832px) minmax(0, 448px)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
      },
      boxShadow: {
        mainOne: "8px 8px 0px #CBC6F4",
        mainTwo: "8px 8px 0px #E7CB43",
        mainThree: "8px 8px 0px #A2D4C5",
        mainFour: "8px 8px 0px #AF4920",
        reviewsOne: "8px -8px 0px #CBC6F4",
        reviewsTwo: "8px -8px 0px #E7CB43",
        reviewsThree: "8px -8px 0px #A2D4C5",
        reviewsFour: "8px -8px 0px #AF4920",
      },
      colors: {
        prymery: "#000000",
        background: "#FBF8F5",
        accent: "#E9672B",
        bestsellers: "#FBF8F5",
        pink: "#F6CFCA",
        border1: "#E9672B",
        border2: "#225DCA",
        border3: "#242947",
        border4: "#DE4333",
        gray: "#4F4F4F",
        white: "#FFFFFF",
        starViolet: "#CBC6F4",
        starYellow: "#E7CB43",
        starGreen: "#A2D4C5",
        footer: "#F3F0EC",
      },
      animation: {
        upmove: "upmove 2s ease-in-out",
        rightmove: "rightmove 1.5s ease-in-out",
      },
      keyframes: {
        upmove: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0%",
            transform: "translateY(80px)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0)",
          },
        },
        rightmove: {
          "0%": {
            transform: "translateX(-80px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
