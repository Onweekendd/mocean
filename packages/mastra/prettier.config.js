import { prettierConfig } from "@mocean/eslint-config/prettier";

/**
 * Mastra Package Prettier 配置
 * 继承基础配置，添加项目特定的 plugins 和 importOrder
 *
 * @type {import('prettier').Options}
 */
export default {
  ...prettierConfig,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "^next(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@video-editor/(.*)$",
    "^@/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
