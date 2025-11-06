import { nextJsConfig } from "@mocean/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    ignores: [
      // 依赖目录
      "node_modules/",

      // Next.js 构建输出
      ".next/",
      "out/",

      // 构建输出
      "dist/",
      "build/",

      // 临时文件
      ".turbo/",
      ".cursor/",

      // 环境文件
      ".env",
      ".env.local",
      ".env.development.local",
      ".env.test.local",
      ".env.production.local",

      // 日志文件
      "*.log",

      // 其他
      ".DS_Store",
      "*.tsbuildinfo",
    ],
  },
];
