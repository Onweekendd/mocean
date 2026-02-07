import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateWithoutGroupInputObjectSchema as ModelGroupCreateWithoutGroupInputObjectSchema } from './ModelGroupCreateWithoutGroupInput.schema';
import { ModelGroupUncheckedCreateWithoutGroupInputObjectSchema as ModelGroupUncheckedCreateWithoutGroupInputObjectSchema } from './ModelGroupUncheckedCreateWithoutGroupInput.schema';
import { ModelGroupCreateOrConnectWithoutGroupInputObjectSchema as ModelGroupCreateOrConnectWithoutGroupInputObjectSchema } from './ModelGroupCreateOrConnectWithoutGroupInput.schema';
import { ModelGroupCreateManyGroupInputEnvelopeObjectSchema as ModelGroupCreateManyGroupInputEnvelopeObjectSchema } from './ModelGroupCreateManyGroupInputEnvelope.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelGroupCreateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => ModelGroupUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelGroupCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelGroupCreateManyGroupInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupUncheckedCreateNestedManyWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUncheckedCreateNestedManyWithoutGroupInput>;
export const ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectZodSchema = makeSchema();
