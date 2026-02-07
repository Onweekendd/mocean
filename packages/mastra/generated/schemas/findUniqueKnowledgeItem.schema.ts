import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemSelectObjectSchema as KnowledgeItemSelectObjectSchema } from './objects/KnowledgeItemSelect.schema';
import { KnowledgeItemIncludeObjectSchema as KnowledgeItemIncludeObjectSchema } from './objects/KnowledgeItemInclude.schema';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './objects/KnowledgeItemWhereUniqueInput.schema';

export const KnowledgeItemFindUniqueSchema: z.ZodType<Prisma.KnowledgeItemFindUniqueArgs> = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), where: KnowledgeItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemFindUniqueArgs>;

export const KnowledgeItemFindUniqueZodSchema = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), where: KnowledgeItemWhereUniqueInputObjectSchema }).strict();