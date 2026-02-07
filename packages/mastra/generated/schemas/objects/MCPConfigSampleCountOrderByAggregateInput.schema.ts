import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  command: SortOrderSchema.optional(),
  argsJson: SortOrderSchema.optional(),
  env: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional()
}).strict();
export const MCPConfigSampleCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleCountOrderByAggregateInput>;
export const MCPConfigSampleCountOrderByAggregateInputObjectZodSchema = makeSchema();
