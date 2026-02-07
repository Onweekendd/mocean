import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseSelectObjectSchema as KnowledgeBaseSelectObjectSchema } from './objects/KnowledgeBaseSelect.schema';
import { KnowledgeBaseIncludeObjectSchema as KnowledgeBaseIncludeObjectSchema } from './objects/KnowledgeBaseInclude.schema';
import { KnowledgeBaseCreateInputObjectSchema as KnowledgeBaseCreateInputObjectSchema } from './objects/KnowledgeBaseCreateInput.schema';
import { KnowledgeBaseUncheckedCreateInputObjectSchema as KnowledgeBaseUncheckedCreateInputObjectSchema } from './objects/KnowledgeBaseUncheckedCreateInput.schema';

export const KnowledgeBaseCreateOneSchema: z.ZodType<Prisma.KnowledgeBaseCreateArgs> = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), data: z.union([KnowledgeBaseCreateInputObjectSchema, KnowledgeBaseUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateArgs>;

export const KnowledgeBaseCreateOneZodSchema = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), data: z.union([KnowledgeBaseCreateInputObjectSchema, KnowledgeBaseUncheckedCreateInputObjectSchema]) }).strict();