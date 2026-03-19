import * as z from 'zod';

export const MCPResourceSchema = z.object({
  id: z.string(),
  uri: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  mimeType: z.string().nullish(),
  size: z.number().int().nullish(),
  text: z.string().nullish(),
  blob: z.string().nullish(),

  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MCPResourceType = z.infer<typeof MCPResourceSchema>;
