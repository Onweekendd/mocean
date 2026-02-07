import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutAssistantsInputObjectSchema as ModelUpdateWithoutAssistantsInputObjectSchema } from './ModelUpdateWithoutAssistantsInput.schema';
import { ModelUncheckedUpdateWithoutAssistantsInputObjectSchema as ModelUncheckedUpdateWithoutAssistantsInputObjectSchema } from './ModelUncheckedUpdateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutAssistantsInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutAssistantsInput>;
export const ModelUpdateToOneWithWhereWithoutAssistantsInputObjectZodSchema = makeSchema();
