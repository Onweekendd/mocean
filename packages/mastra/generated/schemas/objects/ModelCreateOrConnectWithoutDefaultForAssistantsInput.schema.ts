import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutDefaultForAssistantsInputObjectSchema as ModelCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelCreateWithoutDefaultForAssistantsInput.schema';
import { ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema as ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutDefaultForAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutDefaultForAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutDefaultForAssistantsInput>;
export const ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectZodSchema = makeSchema();
