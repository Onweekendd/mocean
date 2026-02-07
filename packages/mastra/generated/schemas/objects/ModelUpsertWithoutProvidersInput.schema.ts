import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutProvidersInputObjectSchema as ModelUpdateWithoutProvidersInputObjectSchema } from './ModelUpdateWithoutProvidersInput.schema';
import { ModelUncheckedUpdateWithoutProvidersInputObjectSchema as ModelUncheckedUpdateWithoutProvidersInputObjectSchema } from './ModelUncheckedUpdateWithoutProvidersInput.schema';
import { ModelCreateWithoutProvidersInputObjectSchema as ModelCreateWithoutProvidersInputObjectSchema } from './ModelCreateWithoutProvidersInput.schema';
import { ModelUncheckedCreateWithoutProvidersInputObjectSchema as ModelUncheckedCreateWithoutProvidersInputObjectSchema } from './ModelUncheckedCreateWithoutProvidersInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutProvidersInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutProvidersInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutProvidersInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutProvidersInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutProvidersInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutProvidersInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutProvidersInput>;
export const ModelUpsertWithoutProvidersInputObjectZodSchema = makeSchema();
