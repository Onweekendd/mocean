import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutProviderInputObjectSchema as GroupCreateWithoutProviderInputObjectSchema } from './GroupCreateWithoutProviderInput.schema';
import { GroupUncheckedCreateWithoutProviderInputObjectSchema as GroupUncheckedCreateWithoutProviderInputObjectSchema } from './GroupUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutProviderInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutProviderInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutProviderInput>;
export const GroupCreateOrConnectWithoutProviderInputObjectZodSchema = makeSchema();
