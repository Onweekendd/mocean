import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutTopicInputObjectSchema as ModelCreateWithoutTopicInputObjectSchema } from './ModelCreateWithoutTopicInput.schema';
import { ModelUncheckedCreateWithoutTopicInputObjectSchema as ModelUncheckedCreateWithoutTopicInputObjectSchema } from './ModelUncheckedCreateWithoutTopicInput.schema';
import { ModelCreateOrConnectWithoutTopicInputObjectSchema as ModelCreateOrConnectWithoutTopicInputObjectSchema } from './ModelCreateOrConnectWithoutTopicInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutTopicInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTopicInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutTopicInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutTopicInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutTopicInput>;
export const ModelCreateNestedOneWithoutTopicInputObjectZodSchema = makeSchema();
