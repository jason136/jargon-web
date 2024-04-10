import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        slide: "slide 14s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animationPlayState: {
        running: 'running',
        paused: 'paused',
      },
    },
  },
  variants: {
    extend: {
      animationPlayState: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.pause': {
          animationPlayState: 'paused',
        },
        '.running': {
          animationPlayState: 'running',
        },
      }
      addUtilities(newUtilities, ['hover', 'focus'])
    }
  ],
};

export default config;