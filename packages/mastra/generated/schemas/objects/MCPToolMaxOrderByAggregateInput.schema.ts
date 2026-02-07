import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MCPToolMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPToolMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolMaxOrderByAggregateInput>;
export const MCPToolMaxOrderByAggregateInputObjectZodSchema = makeSchema();
