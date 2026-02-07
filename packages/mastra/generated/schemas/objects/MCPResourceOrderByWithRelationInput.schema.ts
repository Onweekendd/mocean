import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPServerOrderByWithRelationInputObjectSchema as MCPServerOrderByWithRelationInputObjectSchema } from './MCPServerOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uri: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mimeType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  text: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  blob: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  server: z.lazy(() => MCPServerOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MCPResourceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MCPResourceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceOrderByWithRelationInput>;
export const MCPResourceOrderByWithRelationInputObjectZodSchema = makeSchema();
