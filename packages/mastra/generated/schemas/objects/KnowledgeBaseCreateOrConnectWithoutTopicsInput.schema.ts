import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCreateWithoutTopicsInputObjectSchema as KnowledgeBaseCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateWithoutTopicsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema)])
}).strict();
export const KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutTopicsInput>;
export const KnowledgeBaseCreateOrConnectWithoutTopicsInputObjectZodSchema = makeSchema();
