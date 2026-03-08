import type { IconName } from "lucide-react/dynamic";

/**
 * Agent 分组定义
 * key: 英文标识符（用于 URL、数据库、代码）
 * label: 中文显示名（用于 UI）
 * icon: lucide 图标名
 */
export interface AgentGroupDef {
  label: string;
  icon: IconName;
  /** Tailwind bg + text color classes for badges/icons */
  color: string;
}

export const AGENT_GROUPS: Record<string, AgentGroupDef> = {
  mine: {
    label: "我的",
    icon: "user-check",
    color: "bg-violet-500/20 text-violet-600"
  },
  featured: {
    label: "精选",
    icon: "star",
    color: "bg-amber-500/20 text-amber-600"
  },
  career: {
    label: "职业",
    icon: "briefcase",
    color: "bg-blue-500/20 text-blue-600"
  },
  business: {
    label: "商业",
    icon: "handshake",
    color: "bg-emerald-500/20 text-emerald-600"
  },
  tools: {
    label: "工具",
    icon: "wrench",
    color: "bg-slate-500/20 text-slate-600"
  },
  language: {
    label: "语言",
    icon: "languages",
    color: "bg-cyan-500/20 text-cyan-600"
  },
  office: {
    label: "办公",
    icon: "file-text",
    color: "bg-sky-500/20 text-sky-600"
  },
  general: {
    label: "通用",
    icon: "settings",
    color: "bg-zinc-500/20 text-zinc-600"
  },
  writing: {
    label: "写作",
    icon: "pen-tool",
    color: "bg-purple-500/20 text-purple-600"
  },
  programming: {
    label: "编程",
    icon: "code",
    color: "bg-green-500/20 text-green-600"
  },
  emotion: {
    label: "情感",
    icon: "heart",
    color: "bg-rose-500/20 text-rose-600"
  },
  education: {
    label: "教育",
    icon: "graduation-cap",
    color: "bg-blue-600/20 text-blue-600"
  },
  creative: {
    label: "创意",
    icon: "lightbulb",
    color: "bg-orange-500/20 text-orange-600"
  },
  academic: {
    label: "学术",
    icon: "book-open",
    color: "bg-indigo-500/20 text-indigo-600"
  },
  design: {
    label: "设计",
    icon: "wand-sparkles",
    color: "bg-fuchsia-500/20 text-fuchsia-600"
  },
  art: {
    label: "艺术",
    icon: "palette",
    color: "bg-pink-500/20 text-pink-600"
  },
  entertainment: {
    label: "娱乐",
    icon: "gamepad-2",
    color: "bg-yellow-500/20 text-yellow-600"
  },
  lifestyle: {
    label: "生活",
    icon: "coffee",
    color: "bg-lime-500/20 text-lime-600"
  },
  medical: {
    label: "医疗",
    icon: "stethoscope",
    color: "bg-red-500/20 text-red-600"
  },
  gaming: {
    label: "游戏",
    icon: "gamepad-2",
    color: "bg-violet-600/20 text-violet-600"
  },
  translation: {
    label: "翻译",
    icon: "languages",
    color: "bg-teal-500/20 text-teal-600"
  },
  music: {
    label: "音乐",
    icon: "music",
    color: "bg-purple-600/20 text-purple-600"
  },
  review: {
    label: "点评",
    icon: "message-square-more",
    color: "bg-amber-600/20 text-amber-600"
  },
  copywriting: {
    label: "文案",
    icon: "file-text",
    color: "bg-blue-400/20 text-blue-600"
  },
  encyclopedia: {
    label: "百科",
    icon: "book",
    color: "bg-stone-500/20 text-stone-600"
  },
  health: {
    label: "健康",
    icon: "heart-pulse",
    color: "bg-green-600/20 text-green-600"
  },
  marketing: {
    label: "营销",
    icon: "trending-up",
    color: "bg-orange-600/20 text-orange-600"
  },
  science: {
    label: "科学",
    icon: "flask-conical",
    color: "bg-cyan-600/20 text-cyan-600"
  },
  analysis: {
    label: "分析",
    icon: "bar-chart",
    color: "bg-blue-700/20 text-blue-600"
  },
  legal: {
    label: "法律",
    icon: "scale",
    color: "bg-slate-600/20 text-slate-600"
  },
  consulting: {
    label: "咨询",
    icon: "messages-square",
    color: "bg-teal-600/20 text-teal-600"
  },
  finance: {
    label: "金融",
    icon: "banknote",
    color: "bg-emerald-600/20 text-emerald-600"
  },
  travel: { label: "旅游", icon: "plane", color: "bg-sky-600/20 text-sky-600" },
  management: {
    label: "管理",
    icon: "users",
    color: "bg-indigo-600/20 text-indigo-600"
  },
  search: {
    label: "搜索",
    icon: "search",
    color: "bg-yellow-600/20 text-yellow-600"
  }
};

/** 默认分组 key */
export const DEFAULT_GROUP = "featured";

/** 所有已知的分组 key 列表 */
export const GROUP_KEYS = Object.keys(AGENT_GROUPS);

/**
 * 根据分组 key 获取中文标签
 * 未知 key 原样返回
 */
export function getGroupLabel(key: string): string {
  return AGENT_GROUPS[key]?.label ?? key;
}

/**
 * 根据分组 key 获取图标名
 */
export function getGroupIcon(key: string): IconName {
  return AGENT_GROUPS[key]?.icon ?? "bot-message-square";
}

/**
 * 根据分组 key 获取颜色 class
 */
export function getGroupColor(key: string): string {
  return AGENT_GROUPS[key]?.color ?? "bg-zinc-500/20 text-zinc-600";
}

/**
 * 根据中文标签反查分组 key
 * 未知标签原样返回
 */
export function getGroupKeyByLabel(label: string): string {
  for (const [key, def] of Object.entries(AGENT_GROUPS)) {
    if (def.label === label) return key;
  }
  return label;
}
