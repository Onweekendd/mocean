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
export const MCPPromptMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPPromptMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptMinOrderByAggregateInput>;
export const MCPPromptMinOrderByAggregateInputObjectZodSchema = makeSchema();
