import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCreateNestedOneWithoutModelsInputObjectSchema as GroupCreateNestedOneWithoutModelsInputObjectSchema } from './GroupCreateNestedOneWithoutModelsInput.schema';
import { ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema as ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema } from './ProviderCreateNestedOneWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  group: z.lazy(() => GroupCreateNestedOneWithoutModelsInputObjectSchema),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema)
}).strict();
export const ModelGroupCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateWithoutModelInput>;
export const ModelGroupCreateWithoutModelInputObjectZodSchema = makeSchema();
