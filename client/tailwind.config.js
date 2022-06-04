module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      light: "#e3f6fc",
      glass: "rgba(255, 255, 255, 0.4)",
      "glass-light": "rgba(255, 255, 255, 0.65)",
      purple: "#6f11f5",
      gray: "#6c757d",
      "purple-dark": "#141a38",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        up: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
            "transition-duration": "6s",
          },
        },
        test: {
          // "0%, 100%": {
          //   transform: "translateY(0)",
          //   "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          // },
          "100%": {
            transform: "translateY(-2%)",
            "animation-timing-function": "linear",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        up: "up 6s linear",
        test: "test .25s forwards ease-in-out",
      },
    },
  },
  plugins: [],
};
