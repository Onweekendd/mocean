import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  assistantId: z.string().optional(),
  agentId: z.string().optional()
}).strict();
export const AssistantSettingsWhereUniqueInputObjectSchema: z.ZodType<Prisma.AssistantSettingsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsWhereUniqueInput>;
export const AssistantSettingsWhereUniqueInputObjectZodSchema = makeSchema();
