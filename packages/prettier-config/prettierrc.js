export default {
  endOfLine: "crlf",
  printWidth: 80,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  proseWrap: "preserve",
  importOrder: [
    "^react$",
    "^next(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@video-editor/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
