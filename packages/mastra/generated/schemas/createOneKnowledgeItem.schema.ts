import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemSelectObjectSchema as KnowledgeItemSelectObjectSchema } from './objects/KnowledgeItemSelect.schema';
import { KnowledgeItemIncludeObjectSchema as KnowledgeItemIncludeObjectSchema } from './objects/KnowledgeItemInclude.schema';
import { KnowledgeItemCreateInputObjectSchema as KnowledgeItemCreateInputObjectSchema } from './objects/KnowledgeItemCreateInput.schema';
import { KnowledgeItemUncheckedCreateInputObjectSchema as KnowledgeItemUncheckedCreateInputObjectSchema } from './objects/KnowledgeItemUncheckedCreateInput.schema';

export const KnowledgeItemCreateOneSchema: z.ZodType<Prisma.KnowledgeItemCreateArgs> = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), data: z.union([KnowledgeItemCreateInputObjectSchema, KnowledgeItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemCreateArgs>;

export const KnowledgeItemCreateOneZodSchema = z.object({ select: KnowledgeItemSelectObjectSchema.optional(), include: KnowledgeItemIncludeObjectSchema.optional(), data: z.union([KnowledgeItemCreateInputObjectSchema, KnowledgeItemUncheckedCreateInputObjectSchema]) }).strict();