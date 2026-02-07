import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutTopicInputObjectSchema as ModelUpdateWithoutTopicInputObjectSchema } from './ModelUpdateWithoutTopicInput.schema';
import { ModelUncheckedUpdateWithoutTopicInputObjectSchema as ModelUncheckedUpdateWithoutTopicInputObjectSchema } from './ModelUncheckedUpdateWithoutTopicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutTopicInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutTopicInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutTopicInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutTopicInput>;
export const ModelUpdateToOneWithWhereWithoutTopicInputObjectZodSchema = makeSchema();
