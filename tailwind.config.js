const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Outfit'],
            mono: ['Ubuntu Mono']
        },
        extend: {
            colors: {
                'gdark': '#1c1b1c',
                'gblack': '#0D0C0D',
                'gblue': '#344973',
                'gmilk': '#BFB6AE',
                'ggray': '#59524F'
            },
            fontFamily: {
                largeText: ['Bebas Neue']
            },
            backgroundImage: {
                'greg-andromeda1': "url(http://assets.greg.192.168.1.28.nip.io:8086/images/greg-andromeda1.png)"
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}