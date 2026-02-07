import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutTopicsInputObjectSchema as KnowledgeBaseCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateWithoutTopicsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutTopicsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutTopicsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectSchema).optional(),
  connect: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateNestedOneWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateNestedOneWithoutTopicsInput>;
export const KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectZodSchema = makeSchema();
