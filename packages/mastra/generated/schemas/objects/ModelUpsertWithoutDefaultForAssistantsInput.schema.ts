import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutDefaultForAssistantsInputObjectSchema as ModelUpdateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUpdateWithoutDefaultForAssistantsInput.schema';
import { ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema as ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUncheckedUpdateWithoutDefaultForAssistantsInput.schema';
import { ModelCreateWithoutDefaultForAssistantsInputObjectSchema as ModelCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelCreateWithoutDefaultForAssistantsInput.schema';
import { ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema as ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutDefaultForAssistantsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutDefaultForAssistantsInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutDefaultForAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutDefaultForAssistantsInput>;
export const ModelUpsertWithoutDefaultForAssistantsInputObjectZodSchema = makeSchema();
