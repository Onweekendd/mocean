import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPConfigSampleCountOrderByAggregateInputObjectSchema as MCPConfigSampleCountOrderByAggregateInputObjectSchema } from './MCPConfigSampleCountOrderByAggregateInput.schema';
import { MCPConfigSampleMaxOrderByAggregateInputObjectSchema as MCPConfigSampleMaxOrderByAggregateInputObjectSchema } from './MCPConfigSampleMaxOrderByAggregateInput.schema';
import { MCPConfigSampleMinOrderByAggregateInputObjectSchema as MCPConfigSampleMinOrderByAggregateInputObjectSchema } from './MCPConfigSampleMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  command: SortOrderSchema.optional(),
  argsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  env: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serverId: SortOrderSchema.optional(),
  _count: z.lazy(() => MCPConfigSampleCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MCPConfigSampleMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MCPConfigSampleMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MCPConfigSampleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleOrderByWithAggregationInput>;
export const MCPConfigSampleOrderByWithAggregationInputObjectZodSchema = makeSchema();
