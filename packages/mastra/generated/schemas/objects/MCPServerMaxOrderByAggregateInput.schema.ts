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
  isActive: SortOrderSchema.optional(),
  searchKey: SortOrderSchema.optional(),
  provider: SortOrderSchema.optional(),
  providerUrl: SortOrderSchema.optional(),
  logoUrl: SortOrderSchema.optional(),
  timeout: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MCPServerMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPServerMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerMaxOrderByAggregateInput>;
export const MCPServerMaxOrderByAggregateInputObjectZodSchema = makeSchema();
