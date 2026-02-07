import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutProvidersInputObjectSchema as ModelUpdateWithoutProvidersInputObjectSchema } from './ModelUpdateWithoutProvidersInput.schema';
import { ModelUncheckedUpdateWithoutProvidersInputObjectSchema as ModelUncheckedUpdateWithoutProvidersInputObjectSchema } from './ModelUncheckedUpdateWithoutProvidersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutProvidersInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutProvidersInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutProvidersInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutProvidersInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutProvidersInput>;
export const ModelUpdateToOneWithWhereWithoutProvidersInputObjectZodSchema = makeSchema();
