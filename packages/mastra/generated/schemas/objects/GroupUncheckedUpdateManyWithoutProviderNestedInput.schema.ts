import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCreateWithoutProviderInputObjectSchema as GroupCreateWithoutProviderInputObjectSchema } from './GroupCreateWithoutProviderInput.schema';
import { GroupUncheckedCreateWithoutProviderInputObjectSchema as GroupUncheckedCreateWithoutProviderInputObjectSchema } from './GroupUncheckedCreateWithoutProviderInput.schema';
import { GroupCreateOrConnectWithoutProviderInputObjectSchema as GroupCreateOrConnectWithoutProviderInputObjectSchema } from './GroupCreateOrConnectWithoutProviderInput.schema';
import { GroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema as GroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutProviderInput.schema';
import { GroupCreateManyProviderInputEnvelopeObjectSchema as GroupCreateManyProviderInputEnvelopeObjectSchema } from './GroupCreateManyProviderInputEnvelope.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema as GroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutProviderInput.schema';
import { GroupUpdateManyWithWhereWithoutProviderInputObjectSchema as GroupUpdateManyWithWhereWithoutProviderInputObjectSchema } from './GroupUpdateManyWithWhereWithoutProviderInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutProviderInputObjectSchema), z.lazy(() => GroupCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupCreateManyProviderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutProviderInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutProviderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedUpdateManyWithoutProviderNestedInputObjectSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutProviderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutProviderNestedInput>;
export const GroupUncheckedUpdateManyWithoutProviderNestedInputObjectZodSchema = makeSchema();
