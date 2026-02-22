// Auto-generated from design-tokens.tokens.json
// Run: npx tsx scripts/parse-design-tokens.ts

export const designTokens = {
  colors: {
    primary: {
      DEFAULT: "#2063ff",
      "light-100": "#f8f9fc",
      "light-200": "#e9efff",
      "light-300": "#96b6ff",
      "dark-100": "#0440cb",
      "dark-200": "#0035af",
      "dark-300": "#001f67"
    },
    complementary: {
      DEFAULT: "#ff62e0",
      "light-100": "#ffddf8",
      "light-200": "#ffc2f3",
      "light-300": "#ffadef",
      "dark-100": "#d246b6",
      "dark-200": "#ad3495",
      "dark-300": "#6f205f"
    },
    greyscale: {
      "100": "#f3f3f3",
      "200": "#ebebeb",
      "300": "#dfdfdf",
      "400": "#d0d0d0",
      "500": "#acacac",
      "600": "#989898",
      "700": "#717171",
      "800": "#515151",
      white: "#fdfdfd",
      black: "#272727"
    },
    success: {
      DEFAULT: "#079944",
      light: "#d0f0dd",
      dark: "#035c28"
    },
    warning: {
      DEFAULT: "#ff7c25",
      light: "#ffe5d4",
      dark: "#b44800"
    },
    error: {
      DEFAULT: "#ff6767",
      light: "#ffdada",
      dark: "#b43030"
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
