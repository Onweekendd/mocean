import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemSelectObjectSchema as KnowledgeItemSelectObjectSchema } from './objects/KnowledgeItemSelect.schema';
import { KnowledgeItemIncludeObjectSchema as KnowledgeItemIncludeObjectSchema } from './objects/KnowledgeItemInclude.schema';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './objects/KnowledgeItemWhereUniqueInput.schema';
import { KnowledgeItemCreateInputObjectSchema as KnowledgeItemCreateInputObjectSchema } from './objects/KnowledgeItemCreateInput.schema';
import { KnowledgeItemUncheckedCreateInputObjectSchema as KnowledgeItemUncheckedCreateInputObjectSchema } from './objects/KnowledgeItemUncheckedCreateInput.schema';
import { KnowledgeItemUpdateInputObjectSchema as KnowledgeItemUpdateInputObjectSchema } from './objects/KnowledgeItemUpdateInput.schema';
import { KnowledgeItemUncheckedUpdateInputObjectSchema as KnowledgeItemUncheckedUpdateInputObjectSchema } from './objects/KnowledgeItemUncheckedUpdateInput.schema';

export const KnowledgeItemUpsertOneSchema: z.ZodType<Prisma.KnowledgeItemUpsertArgs> = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), where: KnowledgeItemWhereUniqueInputObjectSchema, create: z.union([ KnowledgeItemCreateInputObjectSchema, KnowledgeItemUncheckedCreateInputObjectSchema ]), update: z.union([ KnowledgeItemUpdateInputObjectSchema, KnowledgeItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemUpsertArgs>;

export const KnowledgeItemUpsertOneZodSchema = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), where: KnowledgeItemWhereUniqueInputObjectSchema, create: z.union([ KnowledgeItemCreateInputObjectSchema, KnowledgeItemUncheckedCreateInputObjectSchema ]), update: z.union([ KnowledgeItemUpdateInputObjectSchema, KnowledgeItemUncheckedUpdateInputObjectSchema ]) }).strict();