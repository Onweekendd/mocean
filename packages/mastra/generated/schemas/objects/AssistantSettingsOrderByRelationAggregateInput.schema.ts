import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AssistantSettingsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AssistantSettingsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsOrderByRelationAggregateInput>;
export const AssistantSettingsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
