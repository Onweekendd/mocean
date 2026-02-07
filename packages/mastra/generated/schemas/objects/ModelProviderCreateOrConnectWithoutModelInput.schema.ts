import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderCreateWithoutModelInputObjectSchema as ModelProviderCreateWithoutModelInputObjectSchema } from './ModelProviderCreateWithoutModelInput.schema';
import { ModelProviderUncheckedCreateWithoutModelInputObjectSchema as ModelProviderUncheckedCreateWithoutModelInputObjectSchema } from './ModelProviderUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelProviderCreateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const ModelProviderCreateOrConnectWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelProviderCreateOrConnectWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateOrConnectWithoutModelInput>;
export const ModelProviderCreateOrConnectWithoutModelInputObjectZodSchema = makeSchema();
