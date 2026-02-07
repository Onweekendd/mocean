import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  contextCount: z.literal(true).optional(),
  temperature: z.literal(true).optional(),
  topP: z.literal(true).optional(),
  maxTokens: z.literal(true).optional()
}).strict();
export const AssistantSettingsAvgAggregateInputObjectSchema: z.ZodType<Prisma.AssistantSettingsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsAvgAggregateInputType>;
export const AssistantSettingsAvgAggregateInputObjectZodSchema = makeSchema();
