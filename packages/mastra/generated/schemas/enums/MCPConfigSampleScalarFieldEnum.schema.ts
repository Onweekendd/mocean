import * as z from 'zod';

export const MCPConfigSampleScalarFieldEnumSchema = z.enum(['id', 'command', 'argsJson', 'env', 'serverId'])

export type MCPConfigSampleScalarFieldEnum = z.infer<typeof MCPConfigSampleScalarFieldEnumSchema>;