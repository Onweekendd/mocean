import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutProvidersInputObjectSchema as ModelCreateWithoutProvidersInputObjectSchema } from './ModelCreateWithoutProvidersInput.schema';
import { ModelUncheckedCreateWithoutProvidersInputObjectSchema as ModelUncheckedCreateWithoutProvidersInputObjectSchema } from './ModelUncheckedCreateWithoutProvidersInput.schema';
import { ModelCreateOrConnectWithoutProvidersInputObjectSchema as ModelCreateOrConnectWithoutProvidersInputObjectSchema } from './ModelCreateOrConnectWithoutProvidersInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutProvidersInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutProvidersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutProvidersInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutProvidersInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutProvidersInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutProvidersInput>;
export const ModelCreateNestedOneWithoutProvidersInputObjectZodSchema = makeSchema();
