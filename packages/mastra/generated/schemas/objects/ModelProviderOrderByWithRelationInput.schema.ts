import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './ModelOrderByWithRelationInput.schema';
import { ProviderOrderByWithRelationInputObjectSchema as ProviderOrderByWithRelationInputObjectSchema } from './ProviderOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  modelId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  model: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  provider: z.lazy(() => ProviderOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ModelProviderOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelProviderOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderOrderByWithRelationInput>;
export const ModelProviderOrderByWithRelationInputObjectZodSchema = makeSchema();
