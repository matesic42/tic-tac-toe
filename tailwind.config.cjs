/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '45': '45%',
      '3/4': '75%',
      'full': '100%',
      '80': '80%',
    },
    extend: {
      colors: {
        bgColor:"rgb(25,42,59)",
        square:"rgb(31,53,70)",
        gray:"rgb(165,187,198)",
        green:"rgb(43,195,190)",
        yellow:"rgb(242,178,55)",
        black:"rgb(0,0,0)",
    },
  },
  plugins: [],
}

}