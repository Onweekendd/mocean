import * as z from 'zod';

export const MCPToolScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'inputSchema', 'serverId', 'createdAt', 'updatedAt'])

export type MCPToolScalarFieldEnum = z.infer<typeof MCPToolScalarFieldEnumSchema>;