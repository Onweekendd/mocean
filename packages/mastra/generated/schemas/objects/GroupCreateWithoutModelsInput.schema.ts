import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateNestedOneWithoutGroupsInputObjectSchema as ProviderCreateNestedOneWithoutGroupsInputObjectSchema } from './ProviderCreateNestedOneWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutGroupsInputObjectSchema)
}).strict();
export const GroupCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.GroupCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateWithoutModelsInput>;
export const GroupCreateWithoutModelsInputObjectZodSchema = makeSchema();
