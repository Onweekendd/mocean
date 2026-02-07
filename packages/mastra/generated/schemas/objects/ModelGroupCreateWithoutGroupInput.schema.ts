import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateNestedOneWithoutModelGroupsInputObjectSchema as ModelCreateNestedOneWithoutModelGroupsInputObjectSchema } from './ModelCreateNestedOneWithoutModelGroupsInput.schema';
import { ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema as ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema } from './ProviderCreateNestedOneWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutModelGroupsInputObjectSchema),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema)
}).strict();
export const ModelGroupCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateWithoutGroupInput>;
export const ModelGroupCreateWithoutGroupInputObjectZodSchema = makeSchema();
