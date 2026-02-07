import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutModelGroupsInputObjectSchema as ModelUpdateWithoutModelGroupsInputObjectSchema } from './ModelUpdateWithoutModelGroupsInput.schema';
import { ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema as ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema } from './ModelUncheckedUpdateWithoutModelGroupsInput.schema';
import { ModelCreateWithoutModelGroupsInputObjectSchema as ModelCreateWithoutModelGroupsInputObjectSchema } from './ModelCreateWithoutModelGroupsInput.schema';
import { ModelUncheckedCreateWithoutModelGroupsInputObjectSchema as ModelUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ModelUncheckedCreateWithoutModelGroupsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelGroupsInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutModelGroupsInput>;
export const ModelUpsertWithoutModelGroupsInputObjectZodSchema = makeSchema();
