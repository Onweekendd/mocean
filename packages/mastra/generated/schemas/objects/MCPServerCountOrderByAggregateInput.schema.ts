import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  baseUrl: SortOrderSchema.optional(),
  command: SortOrderSchema.optional(),
  registryUrl: SortOrderSchema.optional(),
  argsJson: SortOrderSchema.optional(),
  env: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  disabledToolsJson: SortOrderSchema.optional(),
  configSample: SortOrderSchema.optional(),
  headers: SortOrderSchema.optional(),
  searchKey: SortOrderSchema.optional(),
  provider: SortOrderSchema.optional(),
  providerUrl: SortOrderSchema.optional(),
  logoUrl: SortOrderSchema.optional(),
  tagsJson: SortOrderSchema.optional(),
  timeout: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MCPServerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPServerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCountOrderByAggregateInput>;
export const MCPServerCountOrderByAggregateInputObjectZodSchema = makeSchema();
