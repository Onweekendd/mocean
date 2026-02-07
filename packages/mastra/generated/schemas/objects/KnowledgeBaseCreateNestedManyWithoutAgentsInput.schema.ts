import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutAgentsInputObjectSchema as KnowledgeBaseCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseCreateWithoutAgentsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAgentsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutAgentsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutAgentsInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseCreateNestedManyWithoutAgentsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutAgentsInput>;
export const KnowledgeBaseCreateNestedManyWithoutAgentsInputObjectZodSchema = makeSchema();
