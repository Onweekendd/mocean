import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutAssistantsInputObjectSchema as ModelUpdateWithoutAssistantsInputObjectSchema } from './ModelUpdateWithoutAssistantsInput.schema';
import { ModelUncheckedUpdateWithoutAssistantsInputObjectSchema as ModelUncheckedUpdateWithoutAssistantsInputObjectSchema } from './ModelUncheckedUpdateWithoutAssistantsInput.schema';
import { ModelCreateWithoutAssistantsInputObjectSchema as ModelCreateWithoutAssistantsInputObjectSchema } from './ModelCreateWithoutAssistantsInput.schema';
import { ModelUncheckedCreateWithoutAssistantsInputObjectSchema as ModelUncheckedCreateWithoutAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutAssistantsInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantsInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutAssistantsInput>;
export const ModelUpsertWithoutAssistantsInputObjectZodSchema = makeSchema();
