import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutAssistantsInputObjectSchema as ModelCreateWithoutAssistantsInputObjectSchema } from './ModelCreateWithoutAssistantsInput.schema';
import { ModelUncheckedCreateWithoutAssistantsInputObjectSchema as ModelUncheckedCreateWithoutAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantsInput.schema';
import { ModelCreateOrConnectWithoutAssistantsInputObjectSchema as ModelCreateOrConnectWithoutAssistantsInputObjectSchema } from './ModelCreateOrConnectWithoutAssistantsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutAssistantsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutAssistantsInput>;
export const ModelCreateNestedOneWithoutAssistantsInputObjectZodSchema = makeSchema();
