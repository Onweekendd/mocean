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
export const MCPPromptMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPPromptMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptMaxOrderByAggregateInput>;
export const MCPPromptMaxOrderByAggregateInputObjectZodSchema = makeSchema();
