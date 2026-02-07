import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutProviderInputObjectSchema as GroupUpdateWithoutProviderInputObjectSchema } from './GroupUpdateWithoutProviderInput.schema';
import { GroupUncheckedUpdateWithoutProviderInputObjectSchema as GroupUncheckedUpdateWithoutProviderInputObjectSchema } from './GroupUncheckedUpdateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutProviderInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutProviderInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutProviderInput>;
export const GroupUpdateWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
