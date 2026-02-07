import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  contextCount: SortOrderSchema.optional(),
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  maxTokens: SortOrderSchema.optional()
}).strict();
export const AssistantSettingsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AssistantSettingsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsSumOrderByAggregateInput>;
export const AssistantSettingsSumOrderByAggregateInputObjectZodSchema = makeSchema();
