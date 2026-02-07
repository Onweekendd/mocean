import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseUpdateWithoutItemsInputObjectSchema as KnowledgeBaseUpdateWithoutItemsInputObjectSchema } from './KnowledgeBaseUpdateWithoutItemsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutItemsInput.schema';
import { KnowledgeBaseCreateWithoutItemsInputObjectSchema as KnowledgeBaseCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseCreateWithoutItemsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutItemsInput.schema';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpsertWithoutItemsInput>;
export const KnowledgeBaseUpsertWithoutItemsInputObjectZodSchema = makeSchema();
