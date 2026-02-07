import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderCreateWithoutProviderInputObjectSchema as ModelProviderCreateWithoutProviderInputObjectSchema } from './ModelProviderCreateWithoutProviderInput.schema';
import { ModelProviderUncheckedCreateWithoutProviderInputObjectSchema as ModelProviderUncheckedCreateWithoutProviderInputObjectSchema } from './ModelProviderUncheckedCreateWithoutProviderInput.schema';
import { ModelProviderCreateOrConnectWithoutProviderInputObjectSchema as ModelProviderCreateOrConnectWithoutProviderInputObjectSchema } from './ModelProviderCreateOrConnectWithoutProviderInput.schema';
import { ModelProviderUpsertWithWhereUniqueWithoutProviderInputObjectSchema as ModelProviderUpsertWithWhereUniqueWithoutProviderInputObjectSchema } from './ModelProviderUpsertWithWhereUniqueWithoutProviderInput.schema';
import { ModelProviderCreateManyProviderInputEnvelopeObjectSchema as ModelProviderCreateManyProviderInputEnvelopeObjectSchema } from './ModelProviderCreateManyProviderInputEnvelope.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderUpdateWithWhereUniqueWithoutProviderInputObjectSchema as ModelProviderUpdateWithWhereUniqueWithoutProviderInputObjectSchema } from './ModelProviderUpdateWithWhereUniqueWithoutProviderInput.schema';
import { ModelProviderUpdateManyWithWhereWithoutProviderInputObjectSchema as ModelProviderUpdateManyWithWhereWithoutProviderInputObjectSchema } from './ModelProviderUpdateManyWithWhereWithoutProviderInput.schema';
import { ModelProviderScalarWhereInputObjectSchema as ModelProviderScalarWhereInputObjectSchema } from './ModelProviderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelProviderCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => ModelProviderUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelProviderCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelProviderUpsertWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUpsertWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelProviderCreateManyProviderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelProviderUpdateWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUpdateWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelProviderUpdateManyWithWhereWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUpdateManyWithWhereWithoutProviderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelProviderScalarWhereInputObjectSchema), z.lazy(() => ModelProviderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelProviderUncheckedUpdateManyWithoutProviderNestedInputObjectSchema: z.ZodType<Prisma.ModelProviderUncheckedUpdateManyWithoutProviderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUncheckedUpdateManyWithoutProviderNestedInput>;
export const ModelProviderUncheckedUpdateManyWithoutProviderNestedInputObjectZodSchema = makeSchema();
