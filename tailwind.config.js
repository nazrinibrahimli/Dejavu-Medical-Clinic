/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1052px',
    },
    colors: {
      'white':'#ffffff',
      'blue': '#252849',
      'pink': '#ede4f3',
      'pink-dark':'#bd6b97',
      'orange': '#f56533',
      'dark-orange':'#d45124',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'green':"#2dacbe",
      'dark-blue':"#003f70",
      'light-blue':"#4899b8"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // backgroundImage: {
      //   'tool': "url('/public/static/tool.jpg')",
      // },
    },
  },
  plugins: [],
}