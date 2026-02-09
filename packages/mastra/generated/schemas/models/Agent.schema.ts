// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
// Circular import removed: import { AssistantSettingsSchema } from './AssistantSettings.schema';
// Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
// Circular import removed: import { MCPAgentServerSchema } from './MCPAgentServer.schema';
// Circular import removed: import { TopicSchema } from './Topic.schema';

export const AgentSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string(),
  type: z.string().default("agent"),
  emoji: z.string().nullish(),
  description: z.string().nullish(),
  groupJson: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  enableWebSearch: z.boolean(),
  webSearchProviderId: z.string().nullish(),
  enableGenerateImage: z.boolean(),
  knowledgeRecognition: KnowledgeRecognitionSchema.nullish(),
  settings: z.lazy(() => {
      const mod = require('./AssistantSettings.schema');
      return mod.AssistantSettingsSchema;
    }).nullish(),
  topics: z.array(z.lazy(() => {
      const mod = require('./Topic.schema');
      return mod.TopicSchema;
    })),
  knowledgeBases: z.array(z.lazy(() => {
      const mod = require('./KnowledgeBase.schema');
      return mod.KnowledgeBaseSchema;
    })),
  mcpServers: z.array(z.lazy(() => {
      const mod = require('./MCPAgentServer.schema');
      return mod.MCPAgentServerSchema;
    })),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AgentType = z.infer<typeof AgentSchema>;
