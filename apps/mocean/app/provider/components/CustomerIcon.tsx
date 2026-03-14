import type { ReactNode } from "react";

import type { StaticImageData } from "next/image";

import { ModelProvider, ProviderIcon } from "@lobehub/icons";
import type { Provider, ProviderType } from "@mocean/mastra/prismaType";

import { cn } from "@/lib/utils";

import { PROVIDER_LOGO_MAP } from "../constant";

/**
 * 根据提供商类型获取图标
 * @param providerName - 提供商名称
 */
export const getProviderIcon = (providerName: string): StaticImageData => {
  const logo =
    PROVIDER_LOGO_MAP[providerName as keyof typeof PROVIDER_LOGO_MAP];
  return logo;
};

const convertProviderTypeToProviderIcon = (
  providerType: ProviderType
): ModelProvider | undefined => {
  const providerMap: Partial<Record<ProviderType, ModelProvider>> = {
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

  return providerMap[providerType];
};

interface RenderProviderAvatarProps {
  provider?: Provider;
  className?: string;
}

/**
 * 渲染提供商头像
 * @param providerName - 提供商名称
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
