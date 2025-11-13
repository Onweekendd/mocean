import { StaticImageData } from "next/image";

import { ProviderType } from "@mocean/mastra/prismaType";

import Ai360ModelLogo from "@/assets/images/models/360.png";
import Ai360ModelLogoDark from "@/assets/images/models/360_dark.png";
import AdeptModelLogo from "@/assets/images/models/adept.png";
import AdeptModelLogoDark from "@/assets/images/models/adept_dark.png";
import Ai21ModelLogo from "@/assets/images/models/ai21.png";
import Ai21ModelLogoDark from "@/assets/images/models/ai21_dark.png";
import AimassModelLogo from "@/assets/images/models/aimass.png";
import AimassModelLogoDark from "@/assets/images/models/aimass_dark.png";
import AisingaporeModelLogo from "@/assets/images/models/aisingapore.png";
import AisingaporeModelLogoDark from "@/assets/images/models/aisingapore_dark.png";
import BaichuanModelLogo from "@/assets/images/models/baichuan.png";
import BaichuanModelLogoDark from "@/assets/images/models/baichuan_dark.png";
import BgeModelLogo from "@/assets/images/models/bge.webp";
import BigcodeModelLogo from "@/assets/images/models/bigcode.webp";
import BigcodeModelLogoDark from "@/assets/images/models/bigcode_dark.webp";
import ChatGLMModelLogo from "@/assets/images/models/chatglm.png";
import ChatGLMModelLogoDark from "@/assets/images/models/chatglm_dark.png";
import ChatGptModelLogo from "@/assets/images/models/chatgpt.jpeg";
import ClaudeModelLogo from "@/assets/images/models/claude.png";
import ClaudeModelLogoDark from "@/assets/images/models/claude_dark.png";
import CodegeexModelLogo from "@/assets/images/models/codegeex.png";
import CodegeexModelLogoDark from "@/assets/images/models/codegeex_dark.png";
import CodestralModelLogo from "@/assets/images/models/codestral.png";
import CohereModelLogo from "@/assets/images/models/cohere.png";
import CohereModelLogoDark from "@/assets/images/models/cohere_dark.png";
import CopilotModelLogo from "@/assets/images/models/copilot.png";
import CopilotModelLogoDark from "@/assets/images/models/copilot_dark.png";
import DalleModelLogo from "@/assets/images/models/dalle.png";
import DalleModelLogoDark from "@/assets/images/models/dalle_dark.png";
import DbrxModelLogo from "@/assets/images/models/dbrx.png";
import DeepSeekModelLogo from "@/assets/images/models/deepseek.png";
import DeepSeekModelLogoDark from "@/assets/images/models/deepseek_dark.png";
import DianxinModelLogo from "@/assets/images/models/dianxin.png";
import DianxinModelLogoDark from "@/assets/images/models/dianxin_dark.png";
import DoubaoModelLogo from "@/assets/images/models/doubao.png";
import DoubaoModelLogoDark from "@/assets/images/models/doubao_dark.png";
import EmbeddingModelLogo from "@/assets/images/models/embedding.png";
import FlashaudioModelLogo from "@/assets/images/models/flashaudio.png";
import FlashaudioModelLogoDark from "@/assets/images/models/flashaudio_dark.png";
import FluxModelLogo from "@/assets/images/models/flux.png";
import FluxModelLogoDark from "@/assets/images/models/flux_dark.png";
import GeminiModelLogo from "@/assets/images/models/gemini.png";
import GeminiModelLogoDark from "@/assets/images/models/gemini_dark.png";
import GemmaModelLogo from "@/assets/images/models/gemma.png";
import GemmaModelLogoDark from "@/assets/images/models/gemma_dark.png";
import GoogleModelLogo from "@/assets/images/models/google.png";
import ChatGPT35ModelLogo from "@/assets/images/models/gpt_3.5.png";
import ChatGPT4ModelLogo from "@/assets/images/models/gpt_4.png";
import ChatGptModelLogoDakr from "@/assets/images/models/gpt_dark.png";
import ChatGPTo1ModelLogo from "@/assets/images/models/gpt_o1.png";
import GrokModelLogo from "@/assets/images/models/grok.png";
import GrokModelLogoDark from "@/assets/images/models/grok_dark.png";
import GrypheModelLogo from "@/assets/images/models/gryphe.png";
import GrypheModelLogoDark from "@/assets/images/models/gryphe_dark.png";
import HailuoModelLogo from "@/assets/images/models/hailuo.png";
import HailuoModelLogoDark from "@/assets/images/models/hailuo_dark.png";
import HuggingfaceModelLogo from "@/assets/images/models/huggingface.png";
import HuggingfaceModelLogoDark from "@/assets/images/models/huggingface_dark.png";
import HunyuanModelLogo from "@/assets/images/models/hunyuan.png";
import HunyuanModelLogoDark from "@/assets/images/models/hunyuan_dark.png";
import IbmModelLogo from "@/assets/images/models/ibm.png";
import IbmModelLogoDark from "@/assets/images/models/ibm_dark.png";
import InternlmModelLogo from "@/assets/images/models/internlm.png";
import InternlmModelLogoDark from "@/assets/images/models/internlm_dark.png";
import InternvlModelLogo from "@/assets/images/models/internvl.png";
import JinaModelLogo from "@/assets/images/models/jina.png";
import JinaModelLogoDark from "@/assets/images/models/jina_dark.png";
import KeLingModelLogo from "@/assets/images/models/keling.png";
import KeLingModelLogoDark from "@/assets/images/models/keling_dark.png";
import LlamaModelLogo from "@/assets/images/models/llama.png";
import LlamaModelLogoDark from "@/assets/images/models/llama_dark.png";
import LLavaModelLogo from "@/assets/images/models/llava.png";
import LLavaModelLogoDark from "@/assets/images/models/llava_dark.png";
import LumaModelLogo from "@/assets/images/models/luma.png";
import LumaModelLogoDark from "@/assets/images/models/luma_dark.png";
import MagicModelLogo from "@/assets/images/models/magic.png";
import MagicModelLogoDark from "@/assets/images/models/magic_dark.png";
import MediatekModelLogo from "@/assets/images/models/mediatek.png";
import MediatekModelLogoDark from "@/assets/images/models/mediatek_dark.png";
import MicrosoftModelLogo from "@/assets/images/models/microsoft.png";
import MicrosoftModelLogoDark from "@/assets/images/models/microsoft_dark.png";
import MidjourneyModelLogo from "@/assets/images/models/midjourney.png";
import MidjourneyModelLogoDark from "@/assets/images/models/midjourney_dark.png";
import MinicpmModelLogo from "@/assets/images/models/minicpm.webp";
import MinimaxModelLogo from "@/assets/images/models/minimax.png";
import MinimaxModelLogoDark from "@/assets/images/models/minimax_dark.png";
import MistralModelLogo from "@/assets/images/models/mixtral.png";
import MistralModelLogoDark from "@/assets/images/models/mixtral_dark.png";
import MoonshotModelLogo from "@/assets/images/models/moonshot.png";
import MoonshotModelLogoDark from "@/assets/images/models/moonshot_dark.png";
import NousResearchModelLogo from "@/assets/images/models/nousresearch.png";
import NvidiaModelLogo from "@/assets/images/models/nvidia.png";
import NvidiaModelLogoDark from "@/assets/images/models/nvidia_dark.png";
import PalmModelLogo from "@/assets/images/models/palm.png";
import PalmModelLogoDark from "@/assets/images/models/palm_dark.png";
import PerplexityModelLogo from "@/assets/images/models/perplexity.png";
import PixtralModelLogo from "@/assets/images/models/pixtral.png";
import PixtralModelLogoDark from "@/assets/images/models/pixtral_dark.png";
import QwenModelLogo from "@/assets/images/models/qwen.png";
import QwenModelLogoDark from "@/assets/images/models/qwen_dark.png";
import RakutenaiModelLogo from "@/assets/images/models/rakutenai.png";
import RakutenaiModelLogoDark from "@/assets/images/models/rakutenai_dark.png";
import SparkDeskModelLogo from "@/assets/images/models/sparkdesk.png";
import SparkDeskModelLogoDark from "@/assets/images/models/sparkdesk_dark.png";
import StabilityModelLogo from "@/assets/images/models/stability.png";
import StabilityModelLogoDark from "@/assets/images/models/stability_dark.png";
import StepModelLogo from "@/assets/images/models/step.png";
import StepModelLogoDark from "@/assets/images/models/step_dark.png";
import SunoModelLogo from "@/assets/images/models/suno.png";
import SunoModelLogoDark from "@/assets/images/models/suno_dark.png";
import TeleModelLogo from "@/assets/images/models/tele.png";
import TeleModelLogoDark from "@/assets/images/models/tele_dark.png";
import UpstageModelLogo from "@/assets/images/models/upstage.png";
import UpstageModelLogoDark from "@/assets/images/models/upstage_dark.png";
import ViduModelLogo from "@/assets/images/models/vidu.png";
import ViduModelLogoDark from "@/assets/images/models/vidu_dark.png";
import VoyageModelLogo from "@/assets/images/models/voyageai.png";
import WenxinModelLogo from "@/assets/images/models/wenxin.png";
import WenxinModelLogoDark from "@/assets/images/models/wenxin_dark.png";
import XirangModelLogo from "@/assets/images/models/xirang.png";
import XirangModelLogoDark from "@/assets/images/models/xirang_dark.png";
import YiModelLogo from "@/assets/images/models/yi.png";
import YiModelLogoDark from "@/assets/images/models/yi_dark.png";
import DmxapiProviderLogo from "@/assets/images/providers/DMXAPI.png";
import AiHubMixProviderLogo from "@/assets/images/providers/aihubmix.webp";
import AlayaNewProviderLogo from "@/assets/images/providers/alayanew.webp";
import AnthropicProviderLogo from "@/assets/images/providers/anthropic.png";
import BaichuanProviderLogo from "@/assets/images/providers/baichuan.png";
import BaiduCloudProviderLogo from "@/assets/images/providers/baidu-cloud.svg";
import BailianProviderLogo from "@/assets/images/providers/bailian.png";
import DeepSeekProviderLogo from "@/assets/images/providers/deepseek.png";
import FireworksProviderLogo from "@/assets/images/providers/fireworks.png";
import GiteeAIProviderLogo from "@/assets/images/providers/gitee-ai.png";
import GithubProviderLogo from "@/assets/images/providers/github.png";
import GoogleProviderLogo from "@/assets/images/providers/google.png";
import GPUStackProviderLogo from "@/assets/images/providers/gpustack.svg";
import GrokProviderLogo from "@/assets/images/providers/grok.png";
import GroqProviderLogo from "@/assets/images/providers/groq.png";
import HyperbolicProviderLogo from "@/assets/images/providers/hyperbolic.png";
import InfiniProviderLogo from "@/assets/images/providers/infini.png";
import JinaProviderLogo from "@/assets/images/providers/jina.png";
import LMStudioProviderLogo from "@/assets/images/providers/lmstudio.png";
import MinimaxProviderLogo from "@/assets/images/providers/minimax.png";
import MistralProviderLogo from "@/assets/images/providers/mistral.png";
import ModelScopeProviderLogo from "@/assets/images/providers/modelscope.png";
import MoonshotProviderLogo from "@/assets/images/providers/moonshot.png";
import NvidiaProviderLogo from "@/assets/images/providers/nvidia.png";
import O3ProviderLogo from "@/assets/images/providers/o3.png";
import OcoolAiProviderLogo from "@/assets/images/providers/ocoolai.png";
import OllamaProviderLogo from "@/assets/images/providers/ollama.png";
import OpenAiProviderLogo from "@/assets/images/providers/openai.png";
import OpenRouterProviderLogo from "@/assets/images/providers/openrouter.png";
import PerplexityProviderLogo from "@/assets/images/providers/perplexity.png";
import PPIOProviderLogo from "@/assets/images/providers/ppio.png";
import QiniuProviderLogo from "@/assets/images/providers/qiniu.webp";
import SiliconFlowProviderLogo from "@/assets/images/providers/silicon.png";
import StepProviderLogo from "@/assets/images/providers/step.png";
import TencentCloudProviderLogo from "@/assets/images/providers/tencent-cloud-ti.png";
import TogetherProviderLogo from "@/assets/images/providers/together.png";
import BytedanceProviderLogo from "@/assets/images/providers/volcengine.png";
import VoyageAIProviderLogo from "@/assets/images/providers/voyageai.png";
import XirangProviderLogo from "@/assets/images/providers/xirang.png";
import ZeroOneProviderLogo from "@/assets/images/providers/zero-one.png";
import ZhipuProviderLogo from "@/assets/images/providers/zhipu.png";

const ChatGPT35ModelLogoDark = ChatGptModelLogoDakr;
const ChatGPT4ModelLogoDark = ChatGptModelLogoDakr;
const ChatGPTo1ModelLogoDark = ChatGptModelLogoDakr;

const GoogleModelLogoDark = GoogleModelLogo;

// 使用同一个图标作为深色模式图标
const EmbeddingModelLogoDark = EmbeddingModelLogo;
const AzureProviderLogo = MicrosoftModelLogo;
const HunyuanProviderLogo = HunyuanModelLogo;
const MinicpmModelLogoDark = MinicpmModelLogo;
const NousResearchModelLogoDark = NousResearchModelLogo;
const PerplexityModelLogoDark = PerplexityModelLogo;

export const PROVIDER_LOGO_MAP: Record<ProviderType, StaticImageData> = {
  openai: OpenAiProviderLogo,
  silicon: SiliconFlowProviderLogo,
  deepseek: DeepSeekProviderLogo,
  "gitee-ai": GiteeAIProviderLogo,
  yi: ZeroOneProviderLogo,
  groq: GroqProviderLogo,
  zhipu: ZhipuProviderLogo,
  ollama: OllamaProviderLogo,
  lmstudio: LMStudioProviderLogo,
  moonshot: MoonshotProviderLogo,
  openrouter: OpenRouterProviderLogo,
  baichuan: BaichuanProviderLogo,
  dashscope: BailianProviderLogo,
  modelscope: ModelScopeProviderLogo,
  xirang: XirangProviderLogo,
  anthropic: AnthropicProviderLogo,
  aihubmix: AiHubMixProviderLogo,
  gemini: GoogleProviderLogo,
  stepfun: StepProviderLogo,
  doubao: BytedanceProviderLogo,
  minimax: MinimaxProviderLogo,
  github: GithubProviderLogo,
  copilot: GithubProviderLogo,
  ocoolai: OcoolAiProviderLogo,
  together: TogetherProviderLogo,
  fireworks: FireworksProviderLogo,
  zhinao: Ai360ModelLogo,
  nvidia: NvidiaProviderLogo,
  "azure-openai": AzureProviderLogo,
  hunyuan: HunyuanProviderLogo,
  grok: GrokProviderLogo,
  hyperbolic: HyperbolicProviderLogo,
  mistral: MistralProviderLogo,
  jina: JinaProviderLogo,
  ppio: PPIOProviderLogo,
  "baidu-cloud": BaiduCloudProviderLogo,
  dmxapi: DmxapiProviderLogo,
  perplexity: PerplexityProviderLogo,
  infini: InfiniProviderLogo,
  o3: O3ProviderLogo,
  "tencent-cloud-ti": TencentCloudProviderLogo,
  gpustack: GPUStackProviderLogo,
  alayanew: AlayaNewProviderLogo,
  voyageai: VoyageAIProviderLogo,
  qiniu: QiniuProviderLogo,
} as const;

export function getModelLogo(modelId: keyof typeof PROVIDER_LOGO_MAP) {
  const isLight = true;

  if (!modelId) {
    return undefined;
  }

  const logoMap = {
    pixtral: isLight ? PixtralModelLogo : PixtralModelLogoDark,
    jina: isLight ? JinaModelLogo : JinaModelLogoDark,
    abab: isLight ? MinimaxModelLogo : MinimaxModelLogoDark,
    minimax: isLight ? MinimaxModelLogo : MinimaxModelLogoDark,
    o1: isLight ? ChatGPTo1ModelLogo : ChatGPTo1ModelLogoDark,
    o3: isLight ? ChatGPTo1ModelLogo : ChatGPTo1ModelLogoDark,
    o4: isLight ? ChatGPTo1ModelLogo : ChatGPTo1ModelLogoDark,
    "gpt-3": isLight ? ChatGPT35ModelLogo : ChatGPT35ModelLogoDark,
    "gpt-4": isLight ? ChatGPT4ModelLogo : ChatGPT4ModelLogoDark,
    gpts: isLight ? ChatGPT4ModelLogo : ChatGPT4ModelLogoDark,
    "text-moderation": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    "babbage-": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    "sora-": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    "(^|/)omni-": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    "Embedding-V1": isLight ? WenxinModelLogo : WenxinModelLogoDark,
    "text-embedding-v": isLight ? QwenModelLogo : QwenModelLogoDark,
    "text-embedding": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    "davinci-": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    glm: isLight ? ChatGLMModelLogo : ChatGLMModelLogoDark,
    deepseek: isLight ? DeepSeekModelLogo : DeepSeekModelLogoDark,
    "(qwen|qwq-|qvq-)": isLight ? QwenModelLogo : QwenModelLogoDark,
    gemma: isLight ? GemmaModelLogo : GemmaModelLogoDark,
    "yi-": isLight ? YiModelLogo : YiModelLogoDark,
    llama: isLight ? LlamaModelLogo : LlamaModelLogoDark,
    mixtral: isLight ? MistralModelLogo : MistralModelLogo,
    mistral: isLight ? MistralModelLogo : MistralModelLogoDark,
    codestral: CodestralModelLogo,
    ministral: isLight ? MistralModelLogo : MistralModelLogoDark,
    moonshot: isLight ? MoonshotModelLogo : MoonshotModelLogoDark,
    kimi: isLight ? MoonshotModelLogo : MoonshotModelLogoDark,
    phi: isLight ? MicrosoftModelLogo : MicrosoftModelLogoDark,
    baichuan: isLight ? BaichuanModelLogo : BaichuanModelLogoDark,
    claude: isLight ? ClaudeModelLogo : ClaudeModelLogoDark,
    gemini: isLight ? GeminiModelLogo : GeminiModelLogoDark,
    bison: isLight ? PalmModelLogo : PalmModelLogoDark,
    palm: isLight ? PalmModelLogo : PalmModelLogoDark,
    step: isLight ? StepModelLogo : StepModelLogoDark,
    hailuo: isLight ? HailuoModelLogo : HailuoModelLogoDark,
    doubao: isLight ? DoubaoModelLogo : DoubaoModelLogoDark,
    "ep-202": isLight ? DoubaoModelLogo : DoubaoModelLogoDark,
    cohere: isLight ? CohereModelLogo : CohereModelLogoDark,
    command: isLight ? CohereModelLogo : CohereModelLogoDark,
    minicpm: isLight ? MinicpmModelLogo : MinicpmModelLogoDark,
    "360": isLight ? Ai360ModelLogo : Ai360ModelLogoDark,
    aimass: isLight ? AimassModelLogo : AimassModelLogoDark,
    codegeex: isLight ? CodegeexModelLogo : CodegeexModelLogoDark,
    copilot: isLight ? CopilotModelLogo : CopilotModelLogoDark,
    creative: isLight ? CopilotModelLogo : CopilotModelLogoDark,
    balanced: isLight ? CopilotModelLogo : CopilotModelLogoDark,
    precise: isLight ? CopilotModelLogo : CopilotModelLogoDark,
    dalle: isLight ? DalleModelLogo : DalleModelLogoDark,
    "dall-e": isLight ? DalleModelLogo : DalleModelLogoDark,
    dbrx: isLight ? DbrxModelLogo : DbrxModelLogo,
    flashaudio: isLight ? FlashaudioModelLogo : FlashaudioModelLogoDark,
    flux: isLight ? FluxModelLogo : FluxModelLogoDark,
    grok: isLight ? GrokModelLogo : GrokModelLogoDark,
    hunyuan: isLight ? HunyuanModelLogo : HunyuanModelLogoDark,
    internlm: isLight ? InternlmModelLogo : InternlmModelLogoDark,
    internvl: InternvlModelLogo,
    llava: isLight ? LLavaModelLogo : LLavaModelLogoDark,
    magic: isLight ? MagicModelLogo : MagicModelLogoDark,
    midjourney: isLight ? MidjourneyModelLogo : MidjourneyModelLogoDark,
    "mj-": isLight ? MidjourneyModelLogo : MidjourneyModelLogoDark,
    "tao-": isLight ? WenxinModelLogo : WenxinModelLogoDark,
    "ernie-": isLight ? WenxinModelLogo : WenxinModelLogoDark,
    voice: isLight ? FlashaudioModelLogo : FlashaudioModelLogoDark,
    "tts-1": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    "whisper-": isLight ? ChatGptModelLogo : ChatGptModelLogoDakr,
    "stable-": isLight ? StabilityModelLogo : StabilityModelLogoDark,
    sd2: isLight ? StabilityModelLogo : StabilityModelLogoDark,
    sd3: isLight ? StabilityModelLogo : StabilityModelLogoDark,
    sdxl: isLight ? StabilityModelLogo : StabilityModelLogoDark,
    sparkdesk: isLight ? SparkDeskModelLogo : SparkDeskModelLogoDark,
    generalv: isLight ? SparkDeskModelLogo : SparkDeskModelLogoDark,
    wizardlm: isLight ? MicrosoftModelLogo : MicrosoftModelLogoDark,
    microsoft: isLight ? MicrosoftModelLogo : MicrosoftModelLogoDark,
    hermes: isLight ? NousResearchModelLogo : NousResearchModelLogoDark,
    gryphe: isLight ? GrypheModelLogo : GrypheModelLogoDark,
    suno: isLight ? SunoModelLogo : SunoModelLogoDark,
    chirp: isLight ? SunoModelLogo : SunoModelLogoDark,
    luma: isLight ? LumaModelLogo : LumaModelLogoDark,
    keling: isLight ? KeLingModelLogo : KeLingModelLogoDark,
    "vidu-": isLight ? ViduModelLogo : ViduModelLogoDark,
    ai21: isLight ? Ai21ModelLogo : Ai21ModelLogoDark,
    "jamba-": isLight ? Ai21ModelLogo : Ai21ModelLogoDark,
    mythomax: isLight ? GrypheModelLogo : GrypheModelLogoDark,
    nvidia: isLight ? NvidiaModelLogo : NvidiaModelLogoDark,
    dianxin: isLight ? DianxinModelLogo : DianxinModelLogoDark,
    tele: isLight ? TeleModelLogo : TeleModelLogoDark,
    adept: isLight ? AdeptModelLogo : AdeptModelLogoDark,
    aisingapore: isLight ? AisingaporeModelLogo : AisingaporeModelLogoDark,
    bigcode: isLight ? BigcodeModelLogo : BigcodeModelLogoDark,
    mediatek: isLight ? MediatekModelLogo : MediatekModelLogoDark,
    upstage: isLight ? UpstageModelLogo : UpstageModelLogoDark,
    rakutenai: isLight ? RakutenaiModelLogo : RakutenaiModelLogoDark,
    ibm: isLight ? IbmModelLogo : IbmModelLogoDark,
    "google/": isLight ? GoogleModelLogo : GoogleModelLogoDark,
    xirang: isLight ? XirangModelLogo : XirangModelLogoDark,
    hugging: isLight ? HuggingfaceModelLogo : HuggingfaceModelLogoDark,
    embedding: isLight ? EmbeddingModelLogo : EmbeddingModelLogoDark,
    perplexity: isLight ? PerplexityModelLogo : PerplexityModelLogoDark,
    sonar: isLight ? PerplexityModelLogo : PerplexityModelLogoDark,
    "bge-": BgeModelLogo,
    "voyage-": VoyageModelLogo,
  };

  for (const key in logoMap) {
    const regex = new RegExp(key, "i");
    if (regex.test(modelId)) {
      return logoMap[key as keyof typeof logoMap];
    }
  }

  return undefined;
}
