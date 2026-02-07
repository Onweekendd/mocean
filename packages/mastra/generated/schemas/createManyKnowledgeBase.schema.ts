import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseCreateManyInputObjectSchema as KnowledgeBaseCreateManyInputObjectSchema } from './objects/KnowledgeBaseCreateManyInput.schema';

export const KnowledgeBaseCreateManySchema: z.ZodType<Prisma.KnowledgeBaseCreateManyArgs> = z.object({ data: z.union([ KnowledgeBaseCreateManyInputObjectSchema, z.array(KnowledgeBaseCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateManyArgs>;

export const KnowledgeBaseCreateManyZodSchema = z.object({ data: z.union([ KnowledgeBaseCreateManyInputObjectSchema, z.array(KnowledgeBaseCreateManyInputObjectSchema) ]),  }).strict();