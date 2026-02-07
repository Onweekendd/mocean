import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  arguments: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MCPPromptCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPPromptCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptCountOrderByAggregateInput>;
export const MCPPromptCountOrderByAggregateInputObjectZodSchema = makeSchema();
