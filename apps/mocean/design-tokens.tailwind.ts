// Auto-generated from design-tokens.tokens.json
// Run: npx tsx scripts/parse-design-tokens.ts

export const designTokens = {
  colors: {
    primary: {
      DEFAULT: "var(--dt-primary)",
      "light-100": "var(--dt-primary-light-100)",
      "light-200": "var(--dt-primary-light-200)",
      "light-300": "var(--dt-primary-light-300)",
      "dark-100": "var(--dt-primary-dark-100)",
      "dark-200": "var(--dt-primary-dark-200)",
      "dark-300": "var(--dt-primary-dark-300)"
    },
    complementary: {
      DEFAULT: "var(--dt-complementary)",
      "light-100": "var(--dt-complementary-light-100)",
      "light-200": "var(--dt-complementary-light-200)",
      "light-300": "var(--dt-complementary-light-300)",
      "dark-100": "var(--dt-complementary-dark-100)",
      "dark-200": "var(--dt-complementary-dark-200)",
      "dark-300": "var(--dt-complementary-dark-300)"
    },
    greyscale: {
      "100": "var(--dt-greyscale-100)",
      "200": "var(--dt-greyscale-200)",
      "300": "var(--dt-greyscale-300)",
      "400": "var(--dt-greyscale-400)",
      "500": "var(--dt-greyscale-500)",
      "600": "var(--dt-greyscale-600)",
      "700": "var(--dt-greyscale-700)",
      "800": "var(--dt-greyscale-800)",
      white: "var(--dt-greyscale-white)",
      black: "var(--dt-greyscale-black)"
    },
    success: {
      DEFAULT: "var(--dt-success)",
      light: "var(--dt-success-light)",
      dark: "var(--dt-success-dark)"
    },
    warning: {
      DEFAULT: "var(--dt-warning)",
      light: "var(--dt-warning-light)",
      dark: "var(--dt-warning-dark)"
    },
    error: {
      DEFAULT: "var(--dt-error)",
      light: "var(--dt-error-light)",
      dark: "var(--dt-error-dark)"
    }
  },

  fontSize: {
    "heading-1": [
      "72px",
      { lineHeight: "86.4px", letterSpacing: "-0.576px" }
    ] as [string, { lineHeight: string; letterSpacing: string }],
    "heading-2": ["60px", { lineHeight: "72px", letterSpacing: "-0.48px" }] as [
      string,
      { lineHeight: string; letterSpacing: string }
    ],
    "heading-3": [
      "48px",
      { lineHeight: "57.6px", letterSpacing: "-0.384px" }
    ] as [string, { lineHeight: string; letterSpacing: string }],
    "heading-4": ["40px", { lineHeight: "48px", letterSpacing: "-0.32px" }] as [
      string,
      { lineHeight: string; letterSpacing: string }
    ],
    "heading-5": [
      "36px",
      { lineHeight: "43.2px", letterSpacing: "-0.288px" }
    ] as [string, { lineHeight: string; letterSpacing: string }],
    "heading-6": [
      "28px",
      { lineHeight: "33.6px", letterSpacing: "-0.224px" }
    ] as [string, { lineHeight: string; letterSpacing: string }],
    "text-xl": [
      "24px",
      { lineHeight: "28.8px", letterSpacing: "-0.192px" }
    ] as [string, { lineHeight: string; letterSpacing: string }],
    "text-lg": ["20px", { lineHeight: "32px", letterSpacing: "-0.16px" }] as [
      string,
      { lineHeight: string; letterSpacing: string }
    ],
    "text-md": [
      "16px",
      { lineHeight: "19.2px", letterSpacing: "-0.128px" }
    ] as [string, { lineHeight: string; letterSpacing: string }],
    "text-sm": ["14px", { lineHeight: "20px", letterSpacing: "-0.112px" }] as [
      string,
      { lineHeight: string; letterSpacing: string }
    ],
    "text-xs": [
      "12px",
      { lineHeight: "14.4px", letterSpacing: "-0.096px" }
    ] as [string, { lineHeight: string; letterSpacing: string }]
  },

  fontFamily: {
    "bricolage-grotesque": [
      "Bricolage Grotesque",
      "Noto Sans SC",
      "PingFang SC",
      "Microsoft YaHei",
      "sans-serif"
    ],
    inter: [
      "Inter",
      "Noto Sans SC",
      "PingFang SC",
      "Microsoft YaHei",
      "sans-serif"
    ]
  },

  boxShadow: {
    short: "0px 0px 4px 0px rgba(0,0,0,0.12)",
    medium: "1px 1px 8px 4px rgba(0,0,0,0.12)",
    large: "1px 1px 12px 10px rgba(0,0,0,0.10)"
  },

  spacing: {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
    "20": "80px",
    "24": "96px",
    "32": "128px",
    "40": "160px",
    "48": "192px",
    "56": "224px",
    "64": "256px"
  },

  backgroundImage: {
    light: "linear-gradient(152deg, #f8f9fc 12%, #ffddf8 44%, #d9e4ff 74%)",
    dense: "linear-gradient(193deg, #451bed 12%, #fe64de 44%, #fe64de 74%)"
  }
};
