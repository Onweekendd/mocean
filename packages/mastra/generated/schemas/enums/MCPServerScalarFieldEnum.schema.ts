import * as z from 'zod';

export const MCPServerScalarFieldEnumSchema = z.enum(['id', 'name', 'type', 'description', 'baseUrl', 'command', 'registryUrl', 'argsJson', 'env', 'isActive', 'disabledToolsJson', 'configSample', 'headers', 'searchKey', 'provider', 'providerUrl', 'logoUrl', 'tagsJson', 'timeout', 'createdAt', 'updatedAt'])

export type MCPServerScalarFieldEnum = z.infer<typeof MCPServerScalarFieldEnumSchema>;