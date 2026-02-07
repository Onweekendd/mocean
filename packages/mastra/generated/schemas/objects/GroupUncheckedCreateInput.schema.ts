import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectSchema as ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './ModelGroupUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  providerId: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  models: z.lazy(() => ModelGroupUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateInput>;
export const GroupUncheckedCreateInputObjectZodSchema = makeSchema();
