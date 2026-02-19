import type { Agent } from "@mocean/mastra/prismaType";

/**
 * Agent groups 关系数据类型
 * 对应 Prisma include { groups: { select: { agentGroup: { select: { name, label } } } } }
 */
export interface AgentGroupRelation {
  agentGroup: {
    id: string;
    name: string;
    label: string;
  };
}

/**
 * 带 groups 关系的 Agent 类型
 * 用于前端组件中接收包含分组关系数据的 Agent
 */
export type AgentWithGroups = Agent & {
  groups: AgentGroupRelation[];
};

/**
 * 从 agent.groups 关系数据中提取分组 name 数组
 * @param groups - agent.groups 关系数组
 * @returns 分组 name（英文标识符）数组
 */
export function getAgentGroupNames(
  groups: AgentGroupRelation[] | null | undefined
): string[] {
  if (!groups) return [];
  return groups.map((g) => g.agentGroup.name);
}

/**
 * 检查智能体是否属于指定分组
 * @param groups - agent.groups 关系数组
 * @param groupName - 目标分组名称（AgentGroup.name）
 */
export function isAgentInGroup(
  groups: AgentGroupRelation[] | null | undefined,
  groupName: string
): boolean {
  return getAgentGroupNames(groups).includes(groupName);
}
