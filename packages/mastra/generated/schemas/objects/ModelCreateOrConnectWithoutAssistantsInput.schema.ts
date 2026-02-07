import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutAssistantsInputObjectSchema as ModelCreateWithoutAssistantsInputObjectSchema } from './ModelCreateWithoutAssistantsInput.schema';
import { ModelUncheckedCreateWithoutAssistantsInputObjectSchema as ModelUncheckedCreateWithoutAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantsInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutAssistantsInput>;
export const ModelCreateOrConnectWithoutAssistantsInputObjectZodSchema = makeSchema();
