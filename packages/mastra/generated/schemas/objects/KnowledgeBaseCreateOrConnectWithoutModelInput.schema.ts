import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCreateWithoutModelInputObjectSchema as KnowledgeBaseCreateWithoutModelInputObjectSchema } from './KnowledgeBaseCreateWithoutModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutModelInput>;
export const KnowledgeBaseCreateOrConnectWithoutModelInputObjectZodSchema = makeSchema();
