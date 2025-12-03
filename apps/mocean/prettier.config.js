/** Prettier 配置 */
/**
 * @type {import('prettier').Options}
 */
export default {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrder: ["^react$", "^next(.*)$", "<THIRD_PARTY_MODULES>", "^@video-editor/(.*)$", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
