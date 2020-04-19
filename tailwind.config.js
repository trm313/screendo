module.exports = {
  theme: {
    fontFamily: {
      header: ["Mitr", "Roboto", "Times", "serif"],
      paragraph: ["Montserrat", "Segoe UI", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          default: "#F76B8A",
          "600": "#F76B8A",
          "200": "#fff0f3",
          "400": "#FFA7BA",
          "800": "#CE4F6B",
        },
        accent: {
          default: "#41BCEB",
          "600": "#41BCEB",
          "400": "#7ED1F1",
          "800": "#0AA1DB",
        },
        gray: {
          default: "#848484",
          "600": "#848484",
          "200": "#E4E4E4",
          "400": "#B5B4B4",
          "800": "#5B5B5B",
        },
      },
      fontSize: {
        "2xs": ".6rem",
      },
      borderRadius: {
        xl: "2.0rem",
        "2xl": "2.5rem",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "first", "last", "hover", "focus"],
  },
  plugins: [],
}
