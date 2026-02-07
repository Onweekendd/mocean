import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateNestedOneWithoutModelGroupsInputObjectSchema as ModelCreateNestedOneWithoutModelGroupsInputObjectSchema } from './ModelCreateNestedOneWithoutModelGroupsInput.schema';
import { GroupCreateNestedOneWithoutModelsInputObjectSchema as GroupCreateNestedOneWithoutModelsInputObjectSchema } from './GroupCreateNestedOneWithoutModelsInput.schema';
import { ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema as ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema } from './ProviderCreateNestedOneWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutModelGroupsInputObjectSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutModelsInputObjectSchema),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema)
}).strict();
export const ModelGroupCreateInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateInput>;
export const ModelGroupCreateInputObjectZodSchema = makeSchema();
