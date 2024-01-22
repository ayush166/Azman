/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./ui/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #405f8d 0%, #223355 100%)',
      },
      colors: {
        'custom-gray':'#D0D0D0',
        'custom-blue':'#3A5681',
        'custom-white':'#fff',
        'custom-lightwhite':'#F4F4F4'
      },
    },
    
  },
  plugins: [],
};
