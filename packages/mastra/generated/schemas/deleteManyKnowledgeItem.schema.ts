import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemWhereInputObjectSchema as KnowledgeItemWhereInputObjectSchema } from './objects/KnowledgeItemWhereInput.schema';

export const KnowledgeItemDeleteManySchema: z.ZodType<Prisma.KnowledgeItemDeleteManyArgs> = z.object({ where: KnowledgeItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemDeleteManyArgs>;

export const KnowledgeItemDeleteManyZodSchema = z.object({ where: KnowledgeItemWhereInputObjectSchema.optional() }).strict();