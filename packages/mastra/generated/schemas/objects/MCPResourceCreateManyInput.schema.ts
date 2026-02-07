import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  uri: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  size: z.number().int().optional().nullable(),
  text: z.string().optional().nullable(),
  blob: z.string().optional().nullable(),
  serverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MCPResourceCreateManyInputObjectSchema: z.ZodType<Prisma.MCPResourceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceCreateManyInput>;
export const MCPResourceCreateManyInputObjectZodSchema = makeSchema();
