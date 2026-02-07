import * as z from 'zod';

export const MCPPromptScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'arguments', 'serverId', 'createdAt', 'updatedAt'])

export type MCPPromptScalarFieldEnum = z.infer<typeof MCPPromptScalarFieldEnumSchema>;