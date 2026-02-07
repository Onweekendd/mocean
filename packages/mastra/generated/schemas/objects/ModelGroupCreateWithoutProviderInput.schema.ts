import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateNestedOneWithoutModelGroupsInputObjectSchema as ModelCreateNestedOneWithoutModelGroupsInputObjectSchema } from './ModelCreateNestedOneWithoutModelGroupsInput.schema';
import { GroupCreateNestedOneWithoutModelsInputObjectSchema as GroupCreateNestedOneWithoutModelsInputObjectSchema } from './GroupCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutModelGroupsInputObjectSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutModelsInputObjectSchema)
}).strict();
export const ModelGroupCreateWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateWithoutProviderInput>;
export const ModelGroupCreateWithoutProviderInputObjectZodSchema = makeSchema();
