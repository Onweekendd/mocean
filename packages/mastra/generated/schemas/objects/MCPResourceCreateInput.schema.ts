import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateNestedOneWithoutResourcesInputObjectSchema as MCPServerCreateNestedOneWithoutResourcesInputObjectSchema } from './MCPServerCreateNestedOneWithoutResourcesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  uri: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  size: z.number().int().optional().nullable(),
  text: z.string().optional().nullable(),
  blob: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  server: z.lazy(() => MCPServerCreateNestedOneWithoutResourcesInputObjectSchema)
}).strict();
export const MCPResourceCreateInputObjectSchema: z.ZodType<Prisma.MCPResourceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceCreateInput>;
export const MCPResourceCreateInputObjectZodSchema = makeSchema();
