import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  owned_by: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  isSystem: SortOrderSchema.optional(),
  contextLength: SortOrderSchema.optional(),
  supportsAttachments: SortOrderSchema.optional(),
  supportsTools: SortOrderSchema.optional(),
  supportsReasoning: SortOrderSchema.optional(),
  supportsImage: SortOrderSchema.optional(),
  supportsAudio: SortOrderSchema.optional(),
  supportsVideo: SortOrderSchema.optional(),
  supportsEmbedding: SortOrderSchema.optional(),
  inputPricePerMillion: SortOrderSchema.optional(),
  outputPricePerMillion: SortOrderSchema.optional()
}).strict();
export const ModelMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelMinOrderByAggregateInput>;
export const ModelMinOrderByAggregateInputObjectZodSchema = makeSchema();
