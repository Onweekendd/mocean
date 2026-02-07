import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPToolCountOrderByAggregateInputObjectSchema as MCPToolCountOrderByAggregateInputObjectSchema } from './MCPToolCountOrderByAggregateInput.schema';
import { MCPToolMaxOrderByAggregateInputObjectSchema as MCPToolMaxOrderByAggregateInputObjectSchema } from './MCPToolMaxOrderByAggregateInput.schema';
import { MCPToolMinOrderByAggregateInputObjectSchema as MCPToolMinOrderByAggregateInputObjectSchema } from './MCPToolMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  inputSchema: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MCPToolCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MCPToolMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MCPToolMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MCPToolOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MCPToolOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolOrderByWithAggregationInput>;
export const MCPToolOrderByWithAggregationInputObjectZodSchema = makeSchema();
