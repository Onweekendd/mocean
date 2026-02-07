import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutTopicInputObjectSchema as ModelCreateWithoutTopicInputObjectSchema } from './ModelCreateWithoutTopicInput.schema';
import { ModelUncheckedCreateWithoutTopicInputObjectSchema as ModelUncheckedCreateWithoutTopicInputObjectSchema } from './ModelUncheckedCreateWithoutTopicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutTopicInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTopicInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutTopicInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutTopicInput>;
export const ModelCreateOrConnectWithoutTopicInputObjectZodSchema = makeSchema();
