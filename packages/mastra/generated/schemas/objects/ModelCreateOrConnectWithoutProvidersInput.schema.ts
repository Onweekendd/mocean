import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutProvidersInputObjectSchema as ModelCreateWithoutProvidersInputObjectSchema } from './ModelCreateWithoutProvidersInput.schema';
import { ModelUncheckedCreateWithoutProvidersInputObjectSchema as ModelUncheckedCreateWithoutProvidersInputObjectSchema } from './ModelUncheckedCreateWithoutProvidersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutProvidersInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutProvidersInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutProvidersInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutProvidersInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutProvidersInput>;
export const ModelCreateOrConnectWithoutProvidersInputObjectZodSchema = makeSchema();
