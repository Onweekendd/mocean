import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPResourceCountOrderByAggregateInputObjectSchema as MCPResourceCountOrderByAggregateInputObjectSchema } from './MCPResourceCountOrderByAggregateInput.schema';
import { MCPResourceAvgOrderByAggregateInputObjectSchema as MCPResourceAvgOrderByAggregateInputObjectSchema } from './MCPResourceAvgOrderByAggregateInput.schema';
import { MCPResourceMaxOrderByAggregateInputObjectSchema as MCPResourceMaxOrderByAggregateInputObjectSchema } from './MCPResourceMaxOrderByAggregateInput.schema';
import { MCPResourceMinOrderByAggregateInputObjectSchema as MCPResourceMinOrderByAggregateInputObjectSchema } from './MCPResourceMinOrderByAggregateInput.schema';
import { MCPResourceSumOrderByAggregateInputObjectSchema as MCPResourceSumOrderByAggregateInputObjectSchema } from './MCPResourceSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => MCPResourceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MCPResourceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MCPResourceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MCPResourceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MCPResourceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MCPResourceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MCPResourceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceOrderByWithAggregationInput>;
export const MCPResourceOrderByWithAggregationInputObjectZodSchema = makeSchema();
