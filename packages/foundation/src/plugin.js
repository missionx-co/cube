const plugin = require("tailwindcss/plugin");
const colors = require("./colors");

module.exports = plugin(function () {}, {
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xl: ["1.25rem", "1.875rem"],
      lg: ["1.125rem", "1.75rem"],
      md: ["1rem", "1.5rem"],
      sm: ["0.875rem", "1.25rem"],
      xs: ["0.75rem", "1.125rem"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    boxShadow: {
      xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      sm: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
      base: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
      "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
      "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
    },
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        "display-2xl": [
          "4.5rem",
          {
            lineHeight: "5.625rem",
            letterSpacing: "-2%",
          },
        ],
        "display-xl": [
          "3.75rem",
          {
            lineHeight: "4.625rem",
            letterSpacing: "-2%",
          },
        ],
        "display-lg": [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-2%",
          },
        ],
        "display-md": ["2.25rem", "2.75rem"],
        "display-sm": ["1.875rem", "2.375rem"],
        "display-xs": ["1.5rem", "2rem"],
      },
    },
  },
});
