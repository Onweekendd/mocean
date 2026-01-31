/**
 * 共享的 Prettier 基础配置
 * 各个项目可以继承此配置，并添加自己的 plugins 和 importOrder
 *
 * @type {import('prettier').Options}
 */
export const prettierConfig = {
  /** 每一行的宽度 */
  printWidth: 80,
  /** Tab 键的空格数 */
  tabWidth: 2,
  /** 是否使用 Tab 格式化 */
  useTabs: false,
  /** 是否加分号 */
  semi: true,
  /** 是否采用单引号 */
  singleQuote: false,
  /** 对象或者数组的最后一个元素后面不要加逗号 */
  trailingComma: "none",
  /** 在对象中的括号之间是否用空格来间隔 */
  bracketSpacing: true,
  /** 箭头函数的参数无论有几个，都要括号包裹 */
  arrowParens: "always",
  /** 换行符的使用 */
  endOfLine: "auto",
};
