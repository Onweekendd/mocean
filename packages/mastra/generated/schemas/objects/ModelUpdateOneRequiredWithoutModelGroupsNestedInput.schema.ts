import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutModelGroupsInputObjectSchema as ModelCreateWithoutModelGroupsInputObjectSchema } from './ModelCreateWithoutModelGroupsInput.schema';
import { ModelUncheckedCreateWithoutModelGroupsInputObjectSchema as ModelUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ModelUncheckedCreateWithoutModelGroupsInput.schema';
import { ModelCreateOrConnectWithoutModelGroupsInputObjectSchema as ModelCreateOrConnectWithoutModelGroupsInputObjectSchema } from './ModelCreateOrConnectWithoutModelGroupsInput.schema';
import { ModelUpsertWithoutModelGroupsInputObjectSchema as ModelUpsertWithoutModelGroupsInputObjectSchema } from './ModelUpsertWithoutModelGroupsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema as ModelUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutModelGroupsInput.schema';
import { ModelUpdateWithoutModelGroupsInputObjectSchema as ModelUpdateWithoutModelGroupsInputObjectSchema } from './ModelUpdateWithoutModelGroupsInput.schema';
import { ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema as ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema } from './ModelUncheckedUpdateWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutModelGroupsInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutModelGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUpdateWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneRequiredWithoutModelGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneRequiredWithoutModelGroupsNestedInput>;
export const ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectZodSchema = makeSchema();
