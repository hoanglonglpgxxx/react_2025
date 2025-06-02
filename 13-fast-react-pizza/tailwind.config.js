// tailwind.config.js
export default {
    theme: {
        fontFamily: {
            sans: ['"Roboto Mono"', 'monospace'],
        },
        extend: {
            colors: {
                pizza: '#123'
            },
            height: {
                screen: '100dvh'
            }
        },
    },
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
