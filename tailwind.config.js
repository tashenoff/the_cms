/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.htm",
    "./partials/*.htm",
    "./layouts/*.htm",
    "./assets/css/*.scss",
    "./assets/css/*.css"
  ],
 
  theme: {
    extend: {
      backgroundColor: ["group-hover"],
      divideColor: ['group-hover'],
        colors: {
            primary: '#0e1733',
            darkLight: '#0c162d',
            primaryLight: '#272f4a',
            secondary: '#ff033e',
            secondaryLight: '#ef238a',
            green: '#47E189',
            greenDark: '#42cf7e',
            black: '#333',
            white: '#fff',
            red: '#e045e6',
            gray: '#F4F4F4',
            blueLight: '#c3d9f6'
        }
    },

    zIndex: {
        '40': '40',
        '60': '60',
        '50': '50',
        '70': '70',
        '80': '80'
    },
},
  plugins: [],
}