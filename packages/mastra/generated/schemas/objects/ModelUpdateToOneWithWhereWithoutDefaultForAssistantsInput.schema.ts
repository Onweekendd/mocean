import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutDefaultForAssistantsInputObjectSchema as ModelUpdateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUpdateWithoutDefaultForAssistantsInput.schema';
import { ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema as ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUncheckedUpdateWithoutDefaultForAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInput>;
export const ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInputObjectZodSchema = makeSchema();
