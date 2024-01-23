/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #405f8d 0%, #223355 100%)',
      },
      colors: {
        'custom-gray':'#D0D0D0',
        'custom-blue':'#3A5681',
        'custom-white':'#FFFFFF',
        'custom-lightwhite':'#F4F4F4',
        'secondary-white':'#F8F8F8',
        'secondary-gray':'#999999',
        'primary-gray':'#DDDDDD',
        'secondary-blue':"#4D8FCD",
        'primary-blue':"#37537E",
        'primary-green':"#5ba71b",
        'button-white':"#E6E6E6",
        'button-gray':"#555555"
      },
    },
    
  },
  plugins: [],
};
