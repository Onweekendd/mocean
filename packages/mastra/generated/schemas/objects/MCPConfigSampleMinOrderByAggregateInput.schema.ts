import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  command: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional()
}).strict();
export const MCPConfigSampleMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleMinOrderByAggregateInput>;
export const MCPConfigSampleMinOrderByAggregateInputObjectZodSchema = makeSchema();
