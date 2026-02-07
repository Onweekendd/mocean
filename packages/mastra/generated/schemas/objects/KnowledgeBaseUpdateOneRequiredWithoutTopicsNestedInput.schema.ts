import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutTopicsInputObjectSchema as KnowledgeBaseCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateWithoutTopicsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutTopicsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutTopicsInput.schema';
import { KnowledgeBaseUpsertWithoutTopicsInputObjectSchema as KnowledgeBaseUpsertWithoutTopicsInputObjectSchema } from './KnowledgeBaseUpsertWithoutTopicsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInputObjectSchema as KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInputObjectSchema } from './KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInput.schema';
import { KnowledgeBaseUpdateWithoutTopicsInputObjectSchema as KnowledgeBaseUpdateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUpdateWithoutTopicsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectSchema).optional(),
  upsert: z.lazy(() => KnowledgeBaseUpsertWithoutTopicsInputObjectSchema).optional(),
  connect: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema)]).optional()
}).strict();
export const KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInput>;
export const KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectZodSchema = makeSchema();
