import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemSelectObjectSchema as KnowledgeItemSelectObjectSchema } from './objects/KnowledgeItemSelect.schema';
import { KnowledgeItemIncludeObjectSchema as KnowledgeItemIncludeObjectSchema } from './objects/KnowledgeItemInclude.schema';
import { KnowledgeItemUpdateInputObjectSchema as KnowledgeItemUpdateInputObjectSchema } from './objects/KnowledgeItemUpdateInput.schema';
import { KnowledgeItemUncheckedUpdateInputObjectSchema as KnowledgeItemUncheckedUpdateInputObjectSchema } from './objects/KnowledgeItemUncheckedUpdateInput.schema';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './objects/KnowledgeItemWhereUniqueInput.schema';

export const KnowledgeItemUpdateOneSchema: z.ZodType<Prisma.KnowledgeItemUpdateArgs> = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), data: z.union([KnowledgeItemUpdateInputObjectSchema, KnowledgeItemUncheckedUpdateInputObjectSchema]), where: KnowledgeItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemUpdateArgs>;

export const KnowledgeItemUpdateOneZodSchema = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), data: z.union([KnowledgeItemUpdateInputObjectSchema, KnowledgeItemUncheckedUpdateInputObjectSchema]), where: KnowledgeItemWhereUniqueInputObjectSchema }).strict();