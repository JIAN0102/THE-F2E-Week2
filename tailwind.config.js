module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['*.html'],
  // },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF4128",
        secondary: "#4B505A",
        gray: {
          100: "#ECEEF0",
          200: "#8C919B",
        },
        black: "#000000",
        white: "#ffffff",
      },
      fontSize: {
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        md: "1.25rem", // 20px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "2.5rem", // 40px
        "3xl": "3.75rem", // 60px
      },
      spacing: {
        0.6: "0.15rem",
        7.5: "1.875rem",
        10.5: "2.625rem",
        15: "3.75rem",
        26: "6.5rem",
        "56.25%": "56.25%",
      },
      height: {
        "h-[calc(100vh-6.5rem)]": "calc(100vh - 6.5rem)",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1601px",
      },
      borderRadius: {
        20: "1.25rem",
      },
      minWidth: {
        37.5: "9.375rem",
      },
      maxWidth: {
        90: "22.25rem",
        120: "30rem",
      },
      boxShadow: {
        header: "0px 0px 4px rgba(75,80,90,0.1)",
      },
      letterSpacing: {
        2.4: "0.15rem",
      },
      zIndex: {
        9999: "9999",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
