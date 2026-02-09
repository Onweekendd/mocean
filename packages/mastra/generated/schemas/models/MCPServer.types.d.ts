import { z } from 'zod';
import type { AgentSchema } from './Agent.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
import type { MCPAgentServerSchema } from './MCPAgentServer.schema';
import type { MCPConfigSampleSchema } from './MCPConfigSample.schema';
import type { MCPPromptSchema } from './MCPPrompt.schema';
import type { MCPResourceSchema } from './MCPResource.schema';
import type { MCPToolSchema } from './MCPTool.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';

// Type extensions for MCPServer with relations
export interface MCPServerWithRelations {
  agents?: z.infer<typeof AgentSchema>[];
  assistants?: z.infer<typeof AssistantSchema>[];
}
