import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          "100": "#828DFF",
          "600": "#606CEC",
          "700": "#5F6CFF",
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "var(--input)",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        matter: ["var(--font-matter)", "serif"],
      },
      width: {
        "roles-line": "calc(4 * 100vw)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-title":
          "radial-gradient(81.38% 966.76% at 74.04% 242.41%, #FFFFFF 35%, #FFFFFF 75.88%, #505050 100%)",
        "feature-line":
          "linear-gradient(90deg, rgba(179, 192, 255, 0) 1.23%, #B3C0FF 10.29%, #9466FF 48.13%, #334ED5 85.72%, rgba(51, 78, 213, 0) 99.72%)",
        "call-to-action":
          "radial-gradient(188% 100.47% at 49.98% 80.06%, rgba(16, 10, 54, 0) 18.09%, rgba(16, 10, 54, 0) 30.08%, #100A36 46.08%, #6432EB 68.38%, #D7C9FA 93.96%)",
        architecture:
          "radial-gradient(100.42% 100.42% at 14.83% 5.51%, #B3C0FF 0.87%, #9466FF 47.74%, #334ED5 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up .5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
