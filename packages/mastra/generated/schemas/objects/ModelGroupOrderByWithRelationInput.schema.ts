import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './ModelOrderByWithRelationInput.schema';
import { GroupOrderByWithRelationInputObjectSchema as GroupOrderByWithRelationInputObjectSchema } from './GroupOrderByWithRelationInput.schema';
import { ProviderOrderByWithRelationInputObjectSchema as ProviderOrderByWithRelationInputObjectSchema } from './ProviderOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  modelId: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  model: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  group: z.lazy(() => GroupOrderByWithRelationInputObjectSchema).optional(),
  provider: z.lazy(() => ProviderOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ModelGroupOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelGroupOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupOrderByWithRelationInput>;
export const ModelGroupOrderByWithRelationInputObjectZodSchema = makeSchema();
