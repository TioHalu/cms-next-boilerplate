/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#850C1A",
        info: "#2492DE",
        success: "#039B5A",
        warning: "#EABC34",
        error: "#d32f2f",
      },
    },
  },
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  plugins: [require("tailwind-scrollbar")],
};
