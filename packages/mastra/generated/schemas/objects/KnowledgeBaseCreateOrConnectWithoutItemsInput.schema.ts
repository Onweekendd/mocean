import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCreateWithoutItemsInputObjectSchema as KnowledgeBaseCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseCreateWithoutItemsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const KnowledgeBaseCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutItemsInput>;
export const KnowledgeBaseCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
