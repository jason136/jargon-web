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
        typewriter: "typewriter 4s steps(44) 1s 1 normal both",
        blinkCursor: "blinkTextCursor 500ms steps(44) infinite normal",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "24em" },
        },
        blinkCursor: {
          from: { borderRightColor: "rgba(255,255,255,.75)" },
          to: { borderRightColor: "transparent" },
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