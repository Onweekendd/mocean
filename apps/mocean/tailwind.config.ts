import type { Config } from "tailwindcss";

import { designTokens } from "./design-tokens.tailwind";

const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        // Figma design tokens
        ...designTokens.colors,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          ...designTokens.colors.primary,
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        },
        // 品牌主题色
        brand: {
          text: "hsl(var(--brand-text))",
          main: "hsl(var(--brand-main))",
          primary: {
            50: "hsl(var(--brand-primary-50))",
            100: "hsl(var(--brand-primary-100))",
            200: "hsl(var(--brand-primary-200))",
            300: "hsl(var(--brand-primary-300))",
            400: "hsl(var(--brand-primary-400))",
            500: "hsl(var(--brand-primary-500))",
            600: "hsl(var(--brand-primary-600))",
            700: "hsl(var(--brand-primary-700))",
            800: "hsl(var(--brand-primary-800))",
            900: "hsl(var(--brand-primary-900))",
            950: "hsl(var(--brand-primary-950))",
            DEFAULT: "hsl(var(--brand-primary-500))"
          },
          secondary: {
            50: "hsl(var(--brand-secondary-50))",
            100: "hsl(var(--brand-secondary-100))",
            200: "hsl(var(--brand-secondary-200))",
            300: "hsl(var(--brand-secondary-300))",
            400: "hsl(var(--brand-secondary-400))",
            500: "hsl(var(--brand-secondary-500))",
            600: "hsl(var(--brand-secondary-600))",
            700: "hsl(var(--brand-secondary-700))",
            800: "hsl(var(--brand-secondary-800))",
            900: "hsl(var(--brand-secondary-900))",
            950: "hsl(var(--brand-secondary-950))"
          },
          gradient: {
            from: "hsl(var(--brand-primary-600))",
            to: "hsl(var(--brand-primary-500))"
          }
        },
        // 状态颜色
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))"
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))"
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))"
        }
      },
      fontFamily: designTokens.fontFamily,
      fontSize: designTokens.fontSize,
      boxShadow: designTokens.boxShadow,
      spacing: designTokens.spacing,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      backgroundImage: {
        // 品牌默认渐变 - 对应 bg-gradient-to-br from-blue-500 to-purple-600
        "gradient-brand":
          "linear-gradient(to bottom right, hsl(var(--brand-primary-600)), hsl(var(--brand-primary-500)))",
        // 品牌激活状态渐变 - 对应 bg-gradient-to-br from-purple-500 to-purple-700
        "gradient-brand-active":
          "linear-gradient(to bottom right, hsl(var(--brand-primary-500)), hsl(var(--brand-primary-700)))",
        // 成功状态渐变 - 对应 bg-gradient-to-br from-green-500 to-teal-600
        "gradient-success":
          "linear-gradient(to bottom right, hsl(var(--success)), hsl(var(--info)))"
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
