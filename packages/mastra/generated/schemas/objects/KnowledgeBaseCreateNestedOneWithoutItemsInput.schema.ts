import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutItemsInputObjectSchema as KnowledgeBaseCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseCreateWithoutItemsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutItemsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutItemsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutItemsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutItemsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => KnowledgeBaseCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateNestedOneWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateNestedOneWithoutItemsInput>;
export const KnowledgeBaseCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
