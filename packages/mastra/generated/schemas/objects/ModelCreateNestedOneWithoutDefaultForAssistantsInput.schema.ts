import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutDefaultForAssistantsInputObjectSchema as ModelCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelCreateWithoutDefaultForAssistantsInput.schema';
import { ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema as ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutDefaultForAssistantsInput.schema';
import { ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectSchema as ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectSchema } from './ModelCreateOrConnectWithoutDefaultForAssistantsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutDefaultForAssistantsInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutDefaultForAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutDefaultForAssistantsInput>;
export const ModelCreateNestedOneWithoutDefaultForAssistantsInputObjectZodSchema = makeSchema();
