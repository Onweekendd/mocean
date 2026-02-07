import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderCreateWithoutModelInputObjectSchema as ModelProviderCreateWithoutModelInputObjectSchema } from './ModelProviderCreateWithoutModelInput.schema';
import { ModelProviderUncheckedCreateWithoutModelInputObjectSchema as ModelProviderUncheckedCreateWithoutModelInputObjectSchema } from './ModelProviderUncheckedCreateWithoutModelInput.schema';
import { ModelProviderCreateOrConnectWithoutModelInputObjectSchema as ModelProviderCreateOrConnectWithoutModelInputObjectSchema } from './ModelProviderCreateOrConnectWithoutModelInput.schema';
import { ModelProviderCreateManyModelInputEnvelopeObjectSchema as ModelProviderCreateManyModelInputEnvelopeObjectSchema } from './ModelProviderCreateManyModelInputEnvelope.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelProviderCreateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderCreateWithoutModelInputObjectSchema).array(), z.lazy(() => ModelProviderUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelProviderCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => ModelProviderCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelProviderCreateManyModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelProviderUncheckedCreateNestedManyWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelProviderUncheckedCreateNestedManyWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUncheckedCreateNestedManyWithoutModelInput>;
export const ModelProviderUncheckedCreateNestedManyWithoutModelInputObjectZodSchema = makeSchema();
