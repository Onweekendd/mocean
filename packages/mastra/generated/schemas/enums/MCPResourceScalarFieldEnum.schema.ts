import * as z from 'zod';

export const MCPResourceScalarFieldEnumSchema = z.enum(['id', 'uri', 'name', 'description', 'mimeType', 'size', 'text', 'blob', 'serverId', 'createdAt', 'updatedAt'])

export type MCPResourceScalarFieldEnum = z.infer<typeof MCPResourceScalarFieldEnumSchema>;