import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutItemsInputObjectSchema as KnowledgeBaseCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseCreateWithoutItemsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutItemsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutItemsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutItemsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutItemsInput.schema';
import { KnowledgeBaseUpsertWithoutItemsInputObjectSchema as KnowledgeBaseUpsertWithoutItemsInputObjectSchema } from './KnowledgeBaseUpsertWithoutItemsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateToOneWithWhereWithoutItemsInputObjectSchema as KnowledgeBaseUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './KnowledgeBaseUpdateToOneWithWhereWithoutItemsInput.schema';
import { KnowledgeBaseUpdateWithoutItemsInputObjectSchema as KnowledgeBaseUpdateWithoutItemsInputObjectSchema } from './KnowledgeBaseUpdateWithoutItemsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => KnowledgeBaseCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => KnowledgeBaseUpsertWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateToOneWithWhereWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict();
export const KnowledgeBaseUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateOneRequiredWithoutItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateOneRequiredWithoutItemsNestedInput>;
export const KnowledgeBaseUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema = makeSchema();
