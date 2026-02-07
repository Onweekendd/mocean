import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderCreateWithoutProviderInputObjectSchema as ModelProviderCreateWithoutProviderInputObjectSchema } from './ModelProviderCreateWithoutProviderInput.schema';
import { ModelProviderUncheckedCreateWithoutProviderInputObjectSchema as ModelProviderUncheckedCreateWithoutProviderInputObjectSchema } from './ModelProviderUncheckedCreateWithoutProviderInput.schema';
import { ModelProviderCreateOrConnectWithoutProviderInputObjectSchema as ModelProviderCreateOrConnectWithoutProviderInputObjectSchema } from './ModelProviderCreateOrConnectWithoutProviderInput.schema';
import { ModelProviderCreateManyProviderInputEnvelopeObjectSchema as ModelProviderCreateManyProviderInputEnvelopeObjectSchema } from './ModelProviderCreateManyProviderInputEnvelope.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelProviderCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => ModelProviderUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelProviderCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelProviderCreateManyProviderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelProviderUncheckedCreateNestedManyWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderUncheckedCreateNestedManyWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUncheckedCreateNestedManyWithoutProviderInput>;
export const ModelProviderUncheckedCreateNestedManyWithoutProviderInputObjectZodSchema = makeSchema();
