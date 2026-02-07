import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  modelId: z.string().optional()
}).strict();
export const TopicWhereUniqueInputObjectSchema: z.ZodType<Prisma.TopicWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicWhereUniqueInput>;
export const TopicWhereUniqueInputObjectZodSchema = makeSchema();
