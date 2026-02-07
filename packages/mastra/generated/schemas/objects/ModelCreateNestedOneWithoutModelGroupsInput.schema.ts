import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutModelGroupsInputObjectSchema as ModelCreateWithoutModelGroupsInputObjectSchema } from './ModelCreateWithoutModelGroupsInput.schema';
import { ModelUncheckedCreateWithoutModelGroupsInputObjectSchema as ModelUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ModelUncheckedCreateWithoutModelGroupsInput.schema';
import { ModelCreateOrConnectWithoutModelGroupsInputObjectSchema as ModelCreateOrConnectWithoutModelGroupsInputObjectSchema } from './ModelCreateOrConnectWithoutModelGroupsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutModelGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutModelGroupsInput>;
export const ModelCreateNestedOneWithoutModelGroupsInputObjectZodSchema = makeSchema();
