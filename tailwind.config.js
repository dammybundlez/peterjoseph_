/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html' , 'test.html'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0px 10px 10px -2.08px #00000013, 0px 2.29px 2.29px -1.39px #00000013, 0px 0.6px 0.6px -0.69px #00000013',
        softmulti: '13.33px 13.33px 18.86px -0.83px #00000033, 5.25px 5.25px 7.42px -0.67px #0000001C, 2.36px 2.36px 3.34px -0.5px #00000014, 1.08px 1.08px 1.52px -0.33px #0000000F, 0.4px 0.4px 0.56px -0.17px #0000000D',
        softglow: '2.33px 3.33px 3.14px -0.83px #00000033, 18.32px 18.32px 25.9px -0.73px #00000021, 10.64px 10.64px 15.04px -0.63px #0000001A, 6.5px 6.5px 9.19px -0.52px #00000014, 4.02px 4.02px 5.69px -0.42px #00000012, 2.42px 2.42px 3.42px -0.31px #0000000F, 1.33px 1.33px 1.88px -0.21px #0000000F, 0.56px 0.56px 0.79px -0.1px #0000000D'
      },

      fontFamily: {
        'instrument': ['"Instrument Sans"', 'sans-serif'],
        'sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

