import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutModelGroupsInputObjectSchema as ModelUpdateWithoutModelGroupsInputObjectSchema } from './ModelUpdateWithoutModelGroupsInput.schema';
import { ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema as ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema } from './ModelUncheckedUpdateWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutModelGroupsInput>;
export const ModelUpdateToOneWithWhereWithoutModelGroupsInputObjectZodSchema = makeSchema();
