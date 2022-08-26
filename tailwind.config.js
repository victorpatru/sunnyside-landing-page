/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkModerateCyan: "hsl(168, 34%, 41%)",
        veryDarkBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      backgroundImage: {
        "header-mobile": "url('../images/mobile/image-header.jpg')",
        "header-desktop": "url('../images/desktop/image-header.jpg')",
        "transform-mobile": "url('../images/mobile/image-transform.jpg')",
        "transform-desktop": "url('../images/desktop/image-transform.jpg')",
        "stand-out-mobile": "url('../images/mobile/image-stand-out.jpg')",
        "stand-out-desktop": "url('../images/desktop/image-stand-out.jpg')",
        "cherry-main-mobile":
          "url('../images/mobile/image-graphic-design.jpg')",
        "cherry-main-desktop":
          "url('../images/desktop/image-graphic-design.jpg')",
        "orange-main-mobile": "url('../images/mobile/image-photography.jpg')",
        "orange-main-desktop": "url('../images/desktop/image-photography.jpg')",
      },
      letterSpacing: {
        base: "0.18em",
      },
    },
  },
  plugins: [],
};
