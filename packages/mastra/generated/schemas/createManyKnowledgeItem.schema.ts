import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemCreateManyInputObjectSchema as KnowledgeItemCreateManyInputObjectSchema } from './objects/KnowledgeItemCreateManyInput.schema';

export const KnowledgeItemCreateManySchema: z.ZodType<Prisma.KnowledgeItemCreateManyArgs> = z.object({ data: z.union([ KnowledgeItemCreateManyInputObjectSchema, z.array(KnowledgeItemCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemCreateManyArgs>;

export const KnowledgeItemCreateManyZodSchema = z.object({ data: z.union([ KnowledgeItemCreateManyInputObjectSchema, z.array(KnowledgeItemCreateManyInputObjectSchema) ]),  }).strict();