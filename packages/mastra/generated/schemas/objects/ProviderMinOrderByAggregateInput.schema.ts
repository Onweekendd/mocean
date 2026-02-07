import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  apiKey: SortOrderSchema.optional(),
  apiHost: SortOrderSchema.optional(),
  apiVersion: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  isSystem: SortOrderSchema.optional(),
  isAuthed: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  isGateway: SortOrderSchema.optional(),
  modelCount: SortOrderSchema.optional(),
  docsUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProviderMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProviderMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderMinOrderByAggregateInput>;
export const ProviderMinOrderByAggregateInputObjectZodSchema = makeSchema();
