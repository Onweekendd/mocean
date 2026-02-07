import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateWithoutProviderInputObjectSchema as ModelGroupCreateWithoutProviderInputObjectSchema } from './ModelGroupCreateWithoutProviderInput.schema';
import { ModelGroupUncheckedCreateWithoutProviderInputObjectSchema as ModelGroupUncheckedCreateWithoutProviderInputObjectSchema } from './ModelGroupUncheckedCreateWithoutProviderInput.schema';
import { ModelGroupCreateOrConnectWithoutProviderInputObjectSchema as ModelGroupCreateOrConnectWithoutProviderInputObjectSchema } from './ModelGroupCreateOrConnectWithoutProviderInput.schema';
import { ModelGroupCreateManyProviderInputEnvelopeObjectSchema as ModelGroupCreateManyProviderInputEnvelopeObjectSchema } from './ModelGroupCreateManyProviderInputEnvelope.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelGroupCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => ModelGroupUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelGroupCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelGroupCreateManyProviderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelGroupCreateNestedManyWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateNestedManyWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateNestedManyWithoutProviderInput>;
export const ModelGroupCreateNestedManyWithoutProviderInputObjectZodSchema = makeSchema();
