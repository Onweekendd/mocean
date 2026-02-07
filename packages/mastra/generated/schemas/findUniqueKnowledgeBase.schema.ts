import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseSelectObjectSchema as KnowledgeBaseSelectObjectSchema } from './objects/KnowledgeBaseSelect.schema';
import { KnowledgeBaseIncludeObjectSchema as KnowledgeBaseIncludeObjectSchema } from './objects/KnowledgeBaseInclude.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './objects/KnowledgeBaseWhereUniqueInput.schema';

export const KnowledgeBaseFindUniqueSchema: z.ZodType<Prisma.KnowledgeBaseFindUniqueArgs> = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), where: KnowledgeBaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseFindUniqueArgs>;

export const KnowledgeBaseFindUniqueZodSchema = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), where: KnowledgeBaseWhereUniqueInputObjectSchema }).strict();