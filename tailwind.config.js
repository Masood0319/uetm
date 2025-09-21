module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-in-out",
      },
    },
  },
};
