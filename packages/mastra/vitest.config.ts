import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["**/__tests__/**/*.test.ts"],
    exclude: ["node_modules", "dist", "generated"],
    testTimeout: 30000,
    hookTimeout: 30000,
    setupFiles: ["./src/mastra/__tests__/setup/vitest.setup.ts"],
    fileParallelism: false, // 测试文件串行执行，共享数据库
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true // 单进程执行，共享数据库连接
      }
    },
    maxConcurrency: 1, // 避免并发冲突
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules",
        "**/__tests__/**",
        "**/*.test.ts",
        "**/*.spec.ts",
        "generated",
        "db"
      ]
    }
  },
  // 确保路径解析正确
  resolve: {
    alias: {
      "~": "/src"
    }
  }
});
