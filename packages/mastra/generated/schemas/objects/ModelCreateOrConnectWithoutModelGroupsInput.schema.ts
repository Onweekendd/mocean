import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutModelGroupsInputObjectSchema as ModelCreateWithoutModelGroupsInputObjectSchema } from './ModelCreateWithoutModelGroupsInput.schema';
import { ModelUncheckedCreateWithoutModelGroupsInputObjectSchema as ModelUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ModelUncheckedCreateWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutModelGroupsInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutModelGroupsInput>;
export const ModelCreateOrConnectWithoutModelGroupsInputObjectZodSchema = makeSchema();
