import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";
import dts from "rollup-plugin-dts";

/**
 * 项目依赖配置
 * @type {{ dependencies?: Record<string, string>, devDependencies?: Record<string, string> }}
 * @description 从 package.json 读取的依赖信息
 */
const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8"),
);

/**
 * 外部依赖正则表达式数组
 * @type {RegExp[]}
 * @description 所有依赖包都标记为外部依赖，避免打包到 bundle 中
 */
const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.devDependencies || {}),
].map((name) => new RegExp(`^${name}(/.*)?$`));

/**
 * Rollup 基础插件配置
 * @type {import('rollup').Plugin[]}
 * @description 用于处理 TypeScript、模块解析和 CommonJS 转换
 */
const basePlugins = [
  resolve({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: false, // 类型声明由 dts 插件单独生成
    declarationMap: false,
  }),
];

/**
 * Rollup 打包配置
 * @type {import('rollup').RollupOptions[]}
 * @description 配置两个模块的导出：prismaType 和 apiClient
 *
 * 每个模块包含两个配置项：
 * - 代码打包：将 TypeScript 编译为 ESM 格式的 JavaScript
 * - 类型声明：生成对应的 .d.ts 类型定义文件
 *
 * @example
 * // 执行打包
 * npm run bundle
 *
 * // 使用打包后的模块
 * import type { Agent } from '@mocean/mastra/prismaType'
 * import { agentsApi } from '@mocean/mastra/apiClient'
 */
export default [
  // 2. prismaType 导出 - 类型声明
  {
    input: "generated/prisma/client.ts",
    output: {
      file: "dist/prismaType.d.ts",
      format: "esm",
      sourcemap: false,
    },
    external,
    plugins: [dts()],
  },
  // 3. apiClient 导出 - 代码打包
  {
    input: "src/mastra/api/index.ts",
    output: {
      file: "dist/apiClient.js",
      format: "esm",
      sourcemap: true,
    },
    external,
    plugins: basePlugins,
  },
  // 4. apiClient 导出 - 类型声明
  {
    input: "src/mastra/api/index.ts",
    output: {
      file: "dist/apiClient.d.ts",
      format: "esm",
    },
    external,
    plugins: [dts()],
  },
];
