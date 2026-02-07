import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProviderOrderByWithRelationInputObjectSchema as ProviderOrderByWithRelationInputObjectSchema } from './ProviderOrderByWithRelationInput.schema';
import { ModelGroupOrderByRelationAggregateInputObjectSchema as ModelGroupOrderByRelationAggregateInputObjectSchema } from './ModelGroupOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  provider: z.lazy(() => ProviderOrderByWithRelationInputObjectSchema).optional(),
  models: z.lazy(() => ModelGroupOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const GroupOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GroupOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupOrderByWithRelationInput>;
export const GroupOrderByWithRelationInputObjectZodSchema = makeSchema();
