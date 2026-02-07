import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseUpdateManyMutationInputObjectSchema as KnowledgeBaseUpdateManyMutationInputObjectSchema } from './objects/KnowledgeBaseUpdateManyMutationInput.schema';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './objects/KnowledgeBaseWhereInput.schema';

export const KnowledgeBaseUpdateManySchema: z.ZodType<Prisma.KnowledgeBaseUpdateManyArgs> = z.object({ data: KnowledgeBaseUpdateManyMutationInputObjectSchema, where: KnowledgeBaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateManyArgs>;

export const KnowledgeBaseUpdateManyZodSchema = z.object({ data: KnowledgeBaseUpdateManyMutationInputObjectSchema, where: KnowledgeBaseWhereInputObjectSchema.optional() }).strict();