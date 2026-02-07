import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { KnowledgeBaseCreateNestedOneWithoutItemsInputObjectSchema as KnowledgeBaseCreateNestedOneWithoutItemsInputObjectSchema } from './KnowledgeBaseCreateNestedOneWithoutItemsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  uniqueId: z.string().optional().nullable(),
  uniqueIdsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  type: z.string(),
  content: z.union([JsonNullValueInputSchema, jsonSchema]),
  remark: z.string().optional().nullable(),
  processingStatus: z.string().optional().nullable(),
  processingProgress: z.number().optional().nullable(),
  processingError: z.string().optional().nullable(),
  retryCount: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional(),
  knowledgeBase: z.lazy(() => KnowledgeBaseCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const KnowledgeItemCreateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemCreateInput>;
export const KnowledgeItemCreateInputObjectZodSchema = makeSchema();
