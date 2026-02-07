import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateNestedManyWithoutGroupInputObjectSchema as ModelGroupCreateNestedManyWithoutGroupInputObjectSchema } from './ModelGroupCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  models: z.lazy(() => ModelGroupCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupCreateWithoutProviderInputObjectSchema: z.ZodType<Prisma.GroupCreateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateWithoutProviderInput>;
export const GroupCreateWithoutProviderInputObjectZodSchema = makeSchema();
