import type { ReactNode } from "react";

import { ModelProvider, ProviderIcon } from "@lobehub/icons";
import type { Provider } from "@mocean/mastra/prismaType";

import { cn } from "@/lib/utils";

const providerMap: Record<string, ModelProvider> = {
  openai: ModelProvider.OpenAI,
  stepfun: ModelProvider.Stepfun,
  siliconflow: ModelProvider.SiliconCloud,
  minimax: ModelProvider.Minimax,
  azure: ModelProvider.Azure,
  openai_compatible: ModelProvider.OpenAI,
  anthropic: ModelProvider.Anthropic,
  google: ModelProvider.Google,
  gemini: ModelProvider.Google,
  qwenlm: ModelProvider.Qwen,
  azure_openai: ModelProvider.Azure,
  deepseek: ModelProvider.DeepSeek,
  groq: ModelProvider.Groq,
  mistral: ModelProvider.Mistral,
  xai_cn: ModelProvider.XAI,
  xai: ModelProvider.XAI,
  alibaba: ModelProvider.Qwen,
  alibaba_cn: ModelProvider.Qwen,
  cerebras: ModelProvider.Cerebras,
  fastrouter: ModelProvider.OpenRouter,
  fireworks_ai: ModelProvider.FireworksAI,
  github_models: ModelProvider.Github,
  huggingface: ModelProvider.HuggingFace,
  llama: ModelProvider.Ollama,
  lmstudio: ModelProvider.LmStudio,
  modelscope: ModelProvider.ModelScope,
  moonshotai: ModelProvider.Moonshot,
  moonshotai_cn: ModelProvider.Moonshot,
  nebius: ModelProvider.Nebius,
  nvidia: ModelProvider.Nvidia,
  perplexity: ModelProvider.Perplexity,
  togetherai: ModelProvider.TogetherAI,
  upstage: ModelProvider.Upstage,
  zhipuai: ModelProvider.ZhiPu,
  zhipuai_coding_plan: ModelProvider.ZhiPu,
  openrouter: ModelProvider.OpenRouter,
  vercel: ModelProvider.Vercel
};

export const convertProviderTypeToProviderIcon = (
  providerType: string
): ModelProvider | undefined => providerMap[providerType];

interface RenderProviderAvatarProps {
  provider?: Provider;
  className?: string;
}

/**
 * 渲染提供商头像
 */
export const renderProviderAvatar = ({
  provider,
  className
}: RenderProviderAvatarProps): ReactNode => {
  if (!provider) {
    return (
      <div
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-lg bg-gradient-brand text-sm text-white",
          className
        )}
      />
    );
  }

  const modelProvider = convertProviderTypeToProviderIcon(provider.type);

  return (
    <ProviderIcon
      size={32}
      type={"color"}
      provider={modelProvider}
      className={cn("rounded-lg", className)}
    />
  );
};

interface RenderModelAvatarProps {
  modelId: string;
  modelName: string;
  size?: number;
  className?: string;
}

/**
 * 渲染模型头像，根据 modelId (格式: ${providerId}&${modelId}) 提取供应商来显示图标
 */
export const renderModelAvatar = ({
  modelId,
  modelName,
  size = 40,
  className
}: RenderModelAvatarProps): ReactNode => {
  const providerId = modelId.split("&")[0];
  const modelProvider = convertProviderTypeToProviderIcon(providerId ?? "");

  if (modelProvider) {
    return (
      <ProviderIcon
        size={size}
        type="color"
        provider={modelProvider}
        className={cn("rounded-lg", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-gradient-brand text-sm text-white",
        className
      )}
      style={{ width: size, height: size }}
    >
      {modelName.charAt(0).toUpperCase()}
    </div>
  );
};
