import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutProviderInputObjectSchema as GroupUncheckedUpdateManyWithoutProviderInputObjectSchema } from './GroupUncheckedUpdateManyWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutProviderInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutProviderInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutProviderInput>;
export const GroupUpdateManyWithWhereWithoutProviderInputObjectZodSchema = makeSchema();
