// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
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
  server: z.lazy(() => _r.MCPServerSchema),
  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MCPResourceType = z.infer<typeof MCPResourceSchema>;

// Register to schema registry for circular reference resolution
_r.MCPResourceSchema = MCPResourceSchema;
