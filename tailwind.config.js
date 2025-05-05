module.exports = {
    theme: {
      extend: {
        perspective: {
          '1000': '1000px',
        },
        translate: {
          'z-10': '10px',
        },
      },
    },
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.perspective-1000': {
            perspective: '1000px',
          },
          '.translate-z-10': {
            transform: 'translateZ(10px)',
          }
        })
      }
    ]
  }
  