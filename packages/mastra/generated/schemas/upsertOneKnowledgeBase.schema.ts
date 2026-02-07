import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseSelectObjectSchema as KnowledgeBaseSelectObjectSchema } from './objects/KnowledgeBaseSelect.schema';
import { KnowledgeBaseIncludeObjectSchema as KnowledgeBaseIncludeObjectSchema } from './objects/KnowledgeBaseInclude.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './objects/KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCreateInputObjectSchema as KnowledgeBaseCreateInputObjectSchema } from './objects/KnowledgeBaseCreateInput.schema';
import { KnowledgeBaseUncheckedCreateInputObjectSchema as KnowledgeBaseUncheckedCreateInputObjectSchema } from './objects/KnowledgeBaseUncheckedCreateInput.schema';
import { KnowledgeBaseUpdateInputObjectSchema as KnowledgeBaseUpdateInputObjectSchema } from './objects/KnowledgeBaseUpdateInput.schema';
import { KnowledgeBaseUncheckedUpdateInputObjectSchema as KnowledgeBaseUncheckedUpdateInputObjectSchema } from './objects/KnowledgeBaseUncheckedUpdateInput.schema';

export const KnowledgeBaseUpsertOneSchema: z.ZodType<Prisma.KnowledgeBaseUpsertArgs> = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), where: KnowledgeBaseWhereUniqueInputObjectSchema, create: z.union([ KnowledgeBaseCreateInputObjectSchema, KnowledgeBaseUncheckedCreateInputObjectSchema ]), update: z.union([ KnowledgeBaseUpdateInputObjectSchema, KnowledgeBaseUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseUpsertArgs>;

export const KnowledgeBaseUpsertOneZodSchema = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), where: KnowledgeBaseWhereUniqueInputObjectSchema, create: z.union([ KnowledgeBaseCreateInputObjectSchema, KnowledgeBaseUncheckedCreateInputObjectSchema ]), update: z.union([ KnowledgeBaseUpdateInputObjectSchema, KnowledgeBaseUncheckedUpdateInputObjectSchema ]) }).strict();