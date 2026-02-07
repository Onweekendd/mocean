import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderCreateWithoutModelInputObjectSchema as ModelProviderCreateWithoutModelInputObjectSchema } from './ModelProviderCreateWithoutModelInput.schema';
import { ModelProviderUncheckedCreateWithoutModelInputObjectSchema as ModelProviderUncheckedCreateWithoutModelInputObjectSchema } from './ModelProviderUncheckedCreateWithoutModelInput.schema';
import { ModelProviderCreateOrConnectWithoutModelInputObjectSchema as ModelProviderCreateOrConnectWithoutModelInputObjectSchema } from './ModelProviderCreateOrConnectWithoutModelInput.schema';
import { ModelProviderUpsertWithWhereUniqueWithoutModelInputObjectSchema as ModelProviderUpsertWithWhereUniqueWithoutModelInputObjectSchema } from './ModelProviderUpsertWithWhereUniqueWithoutModelInput.schema';
import { ModelProviderCreateManyModelInputEnvelopeObjectSchema as ModelProviderCreateManyModelInputEnvelopeObjectSchema } from './ModelProviderCreateManyModelInputEnvelope.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderUpdateWithWhereUniqueWithoutModelInputObjectSchema as ModelProviderUpdateWithWhereUniqueWithoutModelInputObjectSchema } from './ModelProviderUpdateWithWhereUniqueWithoutModelInput.schema';
import { ModelProviderUpdateManyWithWhereWithoutModelInputObjectSchema as ModelProviderUpdateManyWithWhereWithoutModelInputObjectSchema } from './ModelProviderUpdateManyWithWhereWithoutModelInput.schema';
import { ModelProviderScalarWhereInputObjectSchema as ModelProviderScalarWhereInputObjectSchema } from './ModelProviderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelProviderCreateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderCreateWithoutModelInputObjectSchema).array(), z.lazy(() => ModelProviderUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelProviderCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => ModelProviderCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelProviderUpsertWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUpsertWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelProviderCreateManyModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelProviderWhereUniqueInputObjectSchema), z.lazy(() => ModelProviderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelProviderUpdateWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUpdateWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelProviderUpdateManyWithWhereWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUpdateManyWithWhereWithoutModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelProviderScalarWhereInputObjectSchema), z.lazy(() => ModelProviderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelProviderUpdateManyWithoutModelNestedInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateManyWithoutModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateManyWithoutModelNestedInput>;
export const ModelProviderUpdateManyWithoutModelNestedInputObjectZodSchema = makeSchema();
