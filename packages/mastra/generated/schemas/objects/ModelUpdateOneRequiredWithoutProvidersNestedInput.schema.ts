import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutProvidersInputObjectSchema as ModelCreateWithoutProvidersInputObjectSchema } from './ModelCreateWithoutProvidersInput.schema';
import { ModelUncheckedCreateWithoutProvidersInputObjectSchema as ModelUncheckedCreateWithoutProvidersInputObjectSchema } from './ModelUncheckedCreateWithoutProvidersInput.schema';
import { ModelCreateOrConnectWithoutProvidersInputObjectSchema as ModelCreateOrConnectWithoutProvidersInputObjectSchema } from './ModelCreateOrConnectWithoutProvidersInput.schema';
import { ModelUpsertWithoutProvidersInputObjectSchema as ModelUpsertWithoutProvidersInputObjectSchema } from './ModelUpsertWithoutProvidersInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutProvidersInputObjectSchema as ModelUpdateToOneWithWhereWithoutProvidersInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutProvidersInput.schema';
import { ModelUpdateWithoutProvidersInputObjectSchema as ModelUpdateWithoutProvidersInputObjectSchema } from './ModelUpdateWithoutProvidersInput.schema';
import { ModelUncheckedUpdateWithoutProvidersInputObjectSchema as ModelUncheckedUpdateWithoutProvidersInputObjectSchema } from './ModelUncheckedUpdateWithoutProvidersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutProvidersInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutProvidersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutProvidersInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutProvidersInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutProvidersInputObjectSchema), z.lazy(() => ModelUpdateWithoutProvidersInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutProvidersInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneRequiredWithoutProvidersNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneRequiredWithoutProvidersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneRequiredWithoutProvidersNestedInput>;
export const ModelUpdateOneRequiredWithoutProvidersNestedInputObjectZodSchema = makeSchema();
