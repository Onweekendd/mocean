import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutProviderInputObjectSchema as GroupUpdateWithoutProviderInputObjectSchema } from './GroupUpdateWithoutProviderInput.schema';
import { GroupUncheckedUpdateWithoutProviderInputObjectSchema as GroupUncheckedUpdateWithoutProviderInputObjectSchema } from './GroupUncheckedUpdateWithoutProviderInput.schema';
import { GroupCreateWithoutProviderInputObjectSchema as GroupCreateWithoutProviderInputObjectSchema } from './GroupCreateWithoutProviderInput.schema';
import { GroupUncheckedCreateWithoutProviderInputObjectSchema as GroupUncheckedCreateWithoutProviderInputObjectSchema } from './GroupUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutProviderInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutProviderInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutProviderInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutProviderInput>;
export const GroupUpsertWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
