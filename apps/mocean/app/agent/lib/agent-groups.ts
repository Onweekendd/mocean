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
}

export const AGENT_GROUPS: Record<string, AgentGroupDef> = {
  mine: { label: "我的", icon: "user-check" },
  featured: { label: "精选", icon: "star" },
  career: { label: "职业", icon: "briefcase" },
  business: { label: "商业", icon: "handshake" },
  tools: { label: "工具", icon: "wrench" },
  language: { label: "语言", icon: "languages" },
  office: { label: "办公", icon: "file-text" },
  general: { label: "通用", icon: "settings" },
  writing: { label: "写作", icon: "pen-tool" },
  programming: { label: "编程", icon: "code" },
  emotion: { label: "情感", icon: "heart" },
  education: { label: "教育", icon: "graduation-cap" },
  creative: { label: "创意", icon: "lightbulb" },
  academic: { label: "学术", icon: "book-open" },
  design: { label: "设计", icon: "wand-sparkles" },
  art: { label: "艺术", icon: "palette" },
  entertainment: { label: "娱乐", icon: "gamepad-2" },
  lifestyle: { label: "生活", icon: "coffee" },
  medical: { label: "医疗", icon: "stethoscope" },
  gaming: { label: "游戏", icon: "gamepad-2" },
  translation: { label: "翻译", icon: "languages" },
  music: { label: "音乐", icon: "music" },
  review: { label: "点评", icon: "message-square-more" },
  copywriting: { label: "文案", icon: "file-text" },
  encyclopedia: { label: "百科", icon: "book" },
  health: { label: "健康", icon: "heart-pulse" },
  marketing: { label: "营销", icon: "trending-up" },
  science: { label: "科学", icon: "flask-conical" },
  analysis: { label: "分析", icon: "bar-chart" },
  legal: { label: "法律", icon: "scale" },
  consulting: { label: "咨询", icon: "messages-square" },
  finance: { label: "金融", icon: "banknote" },
  travel: { label: "旅游", icon: "plane" },
  management: { label: "管理", icon: "users" },
  search: { label: "搜索", icon: "search" }
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
 * 根据中文标签反查分组 key
 * 未知标签原样返回
 */
export function getGroupKeyByLabel(label: string): string {
  for (const [key, def] of Object.entries(AGENT_GROUPS)) {
    if (def.label === label) return key;
  }
  return label;
}
