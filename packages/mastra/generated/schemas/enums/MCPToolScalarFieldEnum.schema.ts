import * as z from 'zod';

export const MCPToolScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'inputSchema', 'outputSchema', 'title', 'readOnlyHint', 'destructiveHint', 'idempotentHint', 'openWorldHint', 'toolType', 'metaJson', 'isEnabled', 'callCount', 'lastUsedAt', 'serverId', 'createdAt', 'updatedAt'])

export type MCPToolScalarFieldEnum = z.infer<typeof MCPToolScalarFieldEnumSchema>;