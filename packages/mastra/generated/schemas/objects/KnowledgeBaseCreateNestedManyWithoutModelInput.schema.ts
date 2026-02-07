import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutModelInputObjectSchema as KnowledgeBaseCreateWithoutModelInputObjectSchema } from './KnowledgeBaseCreateWithoutModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutModelInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutModelInput.schema';
import { KnowledgeBaseCreateManyModelInputEnvelopeObjectSchema as KnowledgeBaseCreateManyModelInputEnvelopeObjectSchema } from './KnowledgeBaseCreateManyModelInputEnvelope.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutModelInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => KnowledgeBaseCreateManyModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseCreateNestedManyWithoutModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutModelInput>;
export const KnowledgeBaseCreateNestedManyWithoutModelInputObjectZodSchema = makeSchema();
