import * as z from 'zod';
export const MCPConfigSampleDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  command: z.string(),
  argsJson: z.unknown().optional(),
  env: z.unknown().optional(),
  server: z.unknown(),
  serverId: z.string()
}));