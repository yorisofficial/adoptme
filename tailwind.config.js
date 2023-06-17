/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './adoptme/**/*.html',
    './adoptme/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sawarabi Gothic', 'sans-serif'],
        sawarabi: ['Sawarabi Gothic', 'sans-serif']
      },
      colors: {
        primary: '#304057',
        secolor: '#FDFDFD',
        primarybase: '#EBF3FD',
        primaryText: '#637C95',
        border: '#E6E6E6',
      },
      fontSize: {
        'md:hero': '54px',
        'md:subhero': '20px',
        'md:textbtn': '22px',
        'md:tittle': '36px',
        'md:subjudul': '18px',
        'md:textsmall': '16px',
        'hero': ['38px', '48px'], // ukuran font untuk opsi layar kecil
        'subhero': ['16px', '20px'], // ukuran font untuk opsi layar kecil
        'textbtn': ['18px', '22px'], // ukuran font untuk opsi layar kecil
        'tittle': ['24px', '32px'], // ukuran font untuk opsi layar kecil
        'subjudul': ['14px', '18px'], // ukuran font untuk opsi layar kecil
        'textsmall': ['14px', '16px'], // ukuran font untuk opsi layar kecil
      },
      width: {
        415: '415px',
        490: '480px',
      },
    },
  },
  plugins: [],
}

