import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupCreateWithoutModelInputObjectSchema as ModelGroupCreateWithoutModelInputObjectSchema } from './ModelGroupCreateWithoutModelInput.schema';
import { ModelGroupUncheckedCreateWithoutModelInputObjectSchema as ModelGroupUncheckedCreateWithoutModelInputObjectSchema } from './ModelGroupUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelGroupCreateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const ModelGroupCreateOrConnectWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateOrConnectWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateOrConnectWithoutModelInput>;
export const ModelGroupCreateOrConnectWithoutModelInputObjectZodSchema = makeSchema();
