import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateNestedOneWithoutGroupsInputObjectSchema as ProviderCreateNestedOneWithoutGroupsInputObjectSchema } from './ProviderCreateNestedOneWithoutGroupsInput.schema';
import { ModelGroupCreateNestedManyWithoutGroupInputObjectSchema as ModelGroupCreateNestedManyWithoutGroupInputObjectSchema } from './ModelGroupCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutGroupsInputObjectSchema),
  models: z.lazy(() => ModelGroupCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupCreateInputObjectSchema: z.ZodType<Prisma.GroupCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateInput>;
export const GroupCreateInputObjectZodSchema = makeSchema();
