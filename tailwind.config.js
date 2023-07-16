/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'pepsiblue': '#0065c3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'applemusic': "url('https://www.pepsi.com/en-us/uploads/images/apple-music/background.png')",
        'nitro':      "url('https://www.pepsi.com/en-us/uploads/images/nitro/Desktop_Background.png')",
        'pepsilike':  "url('https://www.pepsi.com/en-us/uploads/images/twil-bg.jpg')",
        'pepsiproducts': "url('https://www.pepsi.com/en-us/uploads/04_Generation_BG_D_2.png?mtime=20181217151706')",
        'productlocator': "url('https://contact.pepsico.com/files/pepsi/brands/1544457858/Pepsi_Cola_Carbonated_Blue_RGB@2x.jpg')",
      },
      spacing: {
        '678': '678px',
        '486': '486px',
        '580': '580px',
        '1000': '1000px'
      },
      keyframes: {
        easeoutright: {
          '0%': { transform: 'translate3d(-200px, 0, 0)'},
          '25%': { transform: 'translate3d(25px, 0, 0)'},
          '62%': { transform: 'translate3d(-2.5px, 0, 0)'},
          '90%': { transform: 'translate3d(0.25px, 0, 0)'},
          '100%': { transform: 'translateZ(0)'},
        },
        easeoutleft: {
          '0%': { transform: 'translate3d(200px, 0, 0)'},
          '25%': { transform: 'translate3d(-25px, 0, 0)'},
          '62%': { transform: 'translate3d(2.5px, 0, 0)'},
          '90%': { transform: 'translate3d(-0.25px, 0, 0)'},
          '100%': { transform: 'translateZ(0)'},
        },
        linearfadein: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
        fadein: {
          '0%': { opacity: '.75'},
          '50%': { opacity: '.9' },
          '100%': { opacity: '1'},
        },
        socialitemy: {
          '0%': { transform: 'translate3d(0, 400px, 0)'},
          '25%': { transform: 'translate3d(0, -51, 0)'},
          '62%': { transform: 'translate3d(0, 5px, 0)'},
          '90%': { transform: 'translate3d(0, -0.5px, 0)'},
          '100%': { transform: 'translateZ(0)'},
        },
      },
      animation: {
        pepsiright: '9s cubic-bezier(0.4, 0, 1, 1) .5s forwards easeoutright, .9s cubic-bezier(.215, .61, .355, 1) .5s forwards linearfadein',
        pepsileft:  '5s cubic-bezier(.455, .03, .515, .955) .5s forwards easeoutleft, .9s cubic-bezier(.215, .61, .355, 1) .5s forwards linearfadein',
        stayOnPulse: '2s cubic-bezier(.455,.03,.515,.955) forwards socialitemy, 2s cubic-bezier(.215,.61,.355,1) forwards linearfadein;',
        socialMediaImage: 'transition-all .5s cubic-bezier(.1,1.05,.55,1.49)',
        fade: 'fadein .s ease-in-out',
        brighten: 'background 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)',
      }
    }
    ,
  },
  
  plugins: [{
    'flowbite/plugin': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },]
}

