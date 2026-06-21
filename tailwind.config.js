/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          void: '#030014',
          cobalt: '#08071a',
          card: 'rgba(255, 255, 255, 0.02)',
        }
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      },
      boxShadow: {
        'glow-violet': '0 0 30px rgba(139, 92, 246, 0.25)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.25)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.25)',
      }
    },
  },
  plugins: [],
}
