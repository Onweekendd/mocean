import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectSchema as ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './ModelGroupUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  models: z.lazy(() => ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupUncheckedCreateWithoutProviderInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateWithoutProviderInput>;
export const GroupUncheckedCreateWithoutProviderInputObjectZodSchema = makeSchema();
