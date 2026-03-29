/**
 * 模型logo映射表
 * 格式: ${providerId}&${modelId} -> logo URL
 *
 * @example
 * "openai&gpt-4-turbo" -> "https://..."
 * "anthropic&claude-3-opus" -> "https://..."
 */
export const getModelLogo = {} as const;

export type ModelLogoKey = keyof typeof getModelLogo;
