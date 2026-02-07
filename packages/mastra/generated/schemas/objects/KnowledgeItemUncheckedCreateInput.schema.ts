import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

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
  baseId: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const KnowledgeItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemUncheckedCreateInput>;
export const KnowledgeItemUncheckedCreateInputObjectZodSchema = makeSchema();
