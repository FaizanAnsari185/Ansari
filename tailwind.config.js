/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      gradientColorStops: (theme) => ({
        "purple-gradient-start": theme("colors.purple.600"),
        "purple-gradient-end": theme("colors.purple.950"),
      }),
      linearGradientDirections: {
        r: "to right",
      },
    },
  },
  plugins: [],
};
