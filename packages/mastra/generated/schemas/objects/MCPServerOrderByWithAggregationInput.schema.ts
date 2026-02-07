import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPServerCountOrderByAggregateInputObjectSchema as MCPServerCountOrderByAggregateInputObjectSchema } from './MCPServerCountOrderByAggregateInput.schema';
import { MCPServerAvgOrderByAggregateInputObjectSchema as MCPServerAvgOrderByAggregateInputObjectSchema } from './MCPServerAvgOrderByAggregateInput.schema';
import { MCPServerMaxOrderByAggregateInputObjectSchema as MCPServerMaxOrderByAggregateInputObjectSchema } from './MCPServerMaxOrderByAggregateInput.schema';
import { MCPServerMinOrderByAggregateInputObjectSchema as MCPServerMinOrderByAggregateInputObjectSchema } from './MCPServerMinOrderByAggregateInput.schema';
import { MCPServerSumOrderByAggregateInputObjectSchema as MCPServerSumOrderByAggregateInputObjectSchema } from './MCPServerSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  command: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  registryUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  argsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  env: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  disabledToolsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  configSample: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  headers: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  searchKey: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  provider: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  providerUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tagsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  timeout: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MCPServerCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MCPServerAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MCPServerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MCPServerMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MCPServerSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MCPServerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MCPServerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerOrderByWithAggregationInput>;
export const MCPServerOrderByWithAggregationInputObjectZodSchema = makeSchema();
