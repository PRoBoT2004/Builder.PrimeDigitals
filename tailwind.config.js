const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-up": "scrollUp 10s linear infinite",
      },
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      // Replace oklch/oklab with standard RGB-safe custom colors if needed
      colors: {
        primary: '#1E40AF',   // blue-800 (safe)
        secondary: '#64748B', // slate-500 (safe)
        accent: '#22C55E',    // green-500 (safe)
        light: '#F8FAFC',     // slate-50
        dark: '#0F172A',      // slate-900
      },
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
