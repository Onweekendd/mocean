import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  contextCount: SortOrderSchema.optional(),
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  maxTokens: SortOrderSchema.optional()
}).strict();
export const AssistantSettingsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AssistantSettingsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsAvgOrderByAggregateInput>;
export const AssistantSettingsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
