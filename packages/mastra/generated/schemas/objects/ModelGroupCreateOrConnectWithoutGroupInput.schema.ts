import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupCreateWithoutGroupInputObjectSchema as ModelGroupCreateWithoutGroupInputObjectSchema } from './ModelGroupCreateWithoutGroupInput.schema';
import { ModelGroupUncheckedCreateWithoutGroupInputObjectSchema as ModelGroupUncheckedCreateWithoutGroupInputObjectSchema } from './ModelGroupUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelGroupCreateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const ModelGroupCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateOrConnectWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateOrConnectWithoutGroupInput>;
export const ModelGroupCreateOrConnectWithoutGroupInputObjectZodSchema = makeSchema();
