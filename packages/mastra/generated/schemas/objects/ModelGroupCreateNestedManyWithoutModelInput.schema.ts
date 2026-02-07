import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateWithoutModelInputObjectSchema as ModelGroupCreateWithoutModelInputObjectSchema } from './ModelGroupCreateWithoutModelInput.schema';
import { ModelGroupUncheckedCreateWithoutModelInputObjectSchema as ModelGroupUncheckedCreateWithoutModelInputObjectSchema } from './ModelGroupUncheckedCreateWithoutModelInput.schema';
import { ModelGroupCreateOrConnectWithoutModelInputObjectSchema as ModelGroupCreateOrConnectWithoutModelInputObjectSchema } from './ModelGroupCreateOrConnectWithoutModelInput.schema';
import { ModelGroupCreateManyModelInputEnvelopeObjectSchema as ModelGroupCreateManyModelInputEnvelopeObjectSchema } from './ModelGroupCreateManyModelInputEnvelope.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelGroupCreateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupCreateWithoutModelInputObjectSchema).array(), z.lazy(() => ModelGroupUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelGroupCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => ModelGroupCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelGroupCreateManyModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelGroupCreateNestedManyWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateNestedManyWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateNestedManyWithoutModelInput>;
export const ModelGroupCreateNestedManyWithoutModelInputObjectZodSchema = makeSchema();
