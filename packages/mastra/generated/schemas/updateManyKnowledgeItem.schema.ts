import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemUpdateManyMutationInputObjectSchema as KnowledgeItemUpdateManyMutationInputObjectSchema } from './objects/KnowledgeItemUpdateManyMutationInput.schema';
import { KnowledgeItemWhereInputObjectSchema as KnowledgeItemWhereInputObjectSchema } from './objects/KnowledgeItemWhereInput.schema';

export const KnowledgeItemUpdateManySchema: z.ZodType<Prisma.KnowledgeItemUpdateManyArgs> = z.object({ data: KnowledgeItemUpdateManyMutationInputObjectSchema, where: KnowledgeItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemUpdateManyArgs>;

export const KnowledgeItemUpdateManyZodSchema = z.object({ data: KnowledgeItemUpdateManyMutationInputObjectSchema, where: KnowledgeItemWhereInputObjectSchema.optional() }).strict();