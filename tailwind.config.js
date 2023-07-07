/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    textColor: {
      black: "#232536",
      yellow: "#FFD050",
      purle: "#592EA9",
      dark_grey: "#4C4C4C",
      medium_grey: "#6D6E76",
      light_grey: "#F4F4F4",
      lavender: "#F4F0F8",
      light_yellow: "#FBF6EA",
    },
    backgroundColor: {
      black: "#232536",
      yellow: "#FFD050",
      purle: "#592EA9",
      dark_grey: "#4C4C4C",
      medium_grey: "#6D6E76",
      light_grey: "#F4F4F4",
      lavender: "#F4F0F8",
      light_yellow: "#FBF6EA",
    },
  },
  plugins: [],
};
