import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPPromptCountOrderByAggregateInputObjectSchema as MCPPromptCountOrderByAggregateInputObjectSchema } from './MCPPromptCountOrderByAggregateInput.schema';
import { MCPPromptMaxOrderByAggregateInputObjectSchema as MCPPromptMaxOrderByAggregateInputObjectSchema } from './MCPPromptMaxOrderByAggregateInput.schema';
import { MCPPromptMinOrderByAggregateInputObjectSchema as MCPPromptMinOrderByAggregateInputObjectSchema } from './MCPPromptMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  arguments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MCPPromptCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MCPPromptMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MCPPromptMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MCPPromptOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MCPPromptOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptOrderByWithAggregationInput>;
export const MCPPromptOrderByWithAggregationInputObjectZodSchema = makeSchema();
