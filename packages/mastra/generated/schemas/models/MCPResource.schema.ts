// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { MCPServerSchema } from './MCPServer.schema';

export const MCPResourceSchema = z.object({
  id: z.string(),
  uri: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  text: z.string().nullish(),
  blob: z.string().nullish(),
  server: z.lazy(() => {
      const mod = require('./MCPServer.schema');
      return mod.MCPServerSchema;
    }),
  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MCPResourceType = z.infer<typeof MCPResourceSchema>;
