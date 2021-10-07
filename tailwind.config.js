module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: {
          100: '#CEC6C1',
          900: '#CF9E7F'
        },
        normal: {
          100: '#eff4ff',
          900: '#1890ff',
        },
        info: {
          100: '#f5e7c5',
          900: '#ffba3a',
        },
        danger: {
          100: 'rgb(220, 20, 60, 0.1)',
          900: '#dc143c',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
