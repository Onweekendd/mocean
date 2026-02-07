import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCreateWithoutProviderInputObjectSchema as GroupCreateWithoutProviderInputObjectSchema } from './GroupCreateWithoutProviderInput.schema';
import { GroupUncheckedCreateWithoutProviderInputObjectSchema as GroupUncheckedCreateWithoutProviderInputObjectSchema } from './GroupUncheckedCreateWithoutProviderInput.schema';
import { GroupCreateOrConnectWithoutProviderInputObjectSchema as GroupCreateOrConnectWithoutProviderInputObjectSchema } from './GroupCreateOrConnectWithoutProviderInput.schema';
import { GroupCreateManyProviderInputEnvelopeObjectSchema as GroupCreateManyProviderInputEnvelopeObjectSchema } from './GroupCreateManyProviderInputEnvelope.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutProviderInputObjectSchema), z.lazy(() => GroupCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupCreateManyProviderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupCreateNestedManyWithoutProviderInputObjectSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateNestedManyWithoutProviderInput>;
export const GroupCreateNestedManyWithoutProviderInputObjectZodSchema = makeSchema();
