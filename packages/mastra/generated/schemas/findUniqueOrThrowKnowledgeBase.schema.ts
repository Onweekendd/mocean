import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseSelectObjectSchema as KnowledgeBaseSelectObjectSchema } from './objects/KnowledgeBaseSelect.schema';
import { KnowledgeBaseIncludeObjectSchema as KnowledgeBaseIncludeObjectSchema } from './objects/KnowledgeBaseInclude.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './objects/KnowledgeBaseWhereUniqueInput.schema';

export const KnowledgeBaseFindUniqueOrThrowSchema: z.ZodType<Prisma.KnowledgeBaseFindUniqueOrThrowArgs> = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), where: KnowledgeBaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseFindUniqueOrThrowArgs>;

export const KnowledgeBaseFindUniqueOrThrowZodSchema = z.object({ select: KnowledgeBaseSelectObjectSchema.optional(), include: KnowledgeBaseIncludeObjectSchema.optional(), where: KnowledgeBaseWhereUniqueInputObjectSchema }).strict();