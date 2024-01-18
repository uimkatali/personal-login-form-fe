/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/*/.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF3366',
        secondary: '#2C2F5A',
        warning: '#FBC02D',
        'primary-disabled': '#FF85A3',
        'gray-01': '#E9ECEF',
        'gray-02': '#F8F9FA',
        'gray-03': '#CED4DA',
        'light-gray': '#CCCCCC',
        'light-gray-2': '#E0E0E0',
        'green-01': '#689F38',
        'border-color': '#2C2F5A',
        'dark-text': '#2C2F5A',
        'dark-blue': '#2C2F5A',
        error: '#F44336',
        'error-danger': '#F44336',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
    },
    dropShadow: {
      '1md': '0px 3px 6px #E0E0E0',
    },
    boxShadow: {
      '1md': '0px 3px 6px #E0E0E0',
      '1xl': '5px 5px 10px #2C2F5A',
      blue: '0px 0px 0px 2.8px #BBDEFB',
      gray: '0px 3px 6px #E0E0E0',
    },
  },
  plugins: [],

  // it is mandatory to pass the class name in the safelist for each color that you send as a prop to the InputSwitch component
  safelist: [
    'tw-bg-primary',
    'tw-bg-error-danger',
    'peer-checked:tw-bg-green-01',
    'peer-checked:tw-bg-secondary',
    'tw-bg-gray-03',
  ],
}
