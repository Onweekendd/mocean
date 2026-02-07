import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './objects/KnowledgeBaseWhereInput.schema';

export const KnowledgeBaseDeleteManySchema: z.ZodType<Prisma.KnowledgeBaseDeleteManyArgs> = z.object({ where: KnowledgeBaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseDeleteManyArgs>;

export const KnowledgeBaseDeleteManyZodSchema = z.object({ where: KnowledgeBaseWhereInputObjectSchema.optional() }).strict();