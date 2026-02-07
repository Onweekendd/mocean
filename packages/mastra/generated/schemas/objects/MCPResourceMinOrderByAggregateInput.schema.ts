import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uri: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  blob: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MCPResourceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPResourceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceMinOrderByAggregateInput>;
export const MCPResourceMinOrderByAggregateInputObjectZodSchema = makeSchema();
