import { config } from "@mocean/eslint-config/base";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: [
      // ESLint 配置文件本身
      "eslint.config.js",
      "prettier.config.js",
      "rollup.config.mjs",


      // 依赖目录
      "node_modules/",

      // 生成的文件
      "generated/",
      ".mastra/",

      // Prisma 生成的文件
      "prisma/generated/",

      // 构建输出
      "dist/",
      "build/",

      // 临时文件
      ".turbo/",
      ".cursor/",

      // 环境文件
      ".env",
      ".env.local",
      ".env.production",

      // 日志文件
      "*.log",
    ],
  },
  ...config,
];
