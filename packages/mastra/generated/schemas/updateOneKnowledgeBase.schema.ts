import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseSelectObjectSchema as KnowledgeBaseSelectObjectSchema } from './objects/KnowledgeBaseSelect.schema';
import { KnowledgeBaseIncludeObjectSchema as KnowledgeBaseIncludeObjectSchema } from './objects/KnowledgeBaseInclude.schema';
import { KnowledgeBaseUpdateInputObjectSchema as KnowledgeBaseUpdateInputObjectSchema } from './objects/KnowledgeBaseUpdateInput.schema';
import { KnowledgeBaseUncheckedUpdateInputObjectSchema as KnowledgeBaseUncheckedUpdateInputObjectSchema } from './objects/KnowledgeBaseUncheckedUpdateInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './objects/KnowledgeBaseWhereUniqueInput.schema';

export const KnowledgeBaseUpdateOneSchema: z.ZodType<Prisma.KnowledgeBaseUpdateArgs> = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), data: z.union([KnowledgeBaseUpdateInputObjectSchema, KnowledgeBaseUncheckedUpdateInputObjectSchema]), where: KnowledgeBaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateArgs>;

export const KnowledgeBaseUpdateOneZodSchema = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), data: z.union([KnowledgeBaseUpdateInputObjectSchema, KnowledgeBaseUncheckedUpdateInputObjectSchema]), where: KnowledgeBaseWhereUniqueInputObjectSchema }).strict();