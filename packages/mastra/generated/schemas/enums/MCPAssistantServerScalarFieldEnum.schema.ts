import * as z from 'zod';

export const MCPAssistantServerScalarFieldEnumSchema = z.enum(['assistantId', 'mcpServerId'])

export type MCPAssistantServerScalarFieldEnum = z.infer<typeof MCPAssistantServerScalarFieldEnumSchema>;