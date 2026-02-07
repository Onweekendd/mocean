import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupCreateWithoutProviderInputObjectSchema as ModelGroupCreateWithoutProviderInputObjectSchema } from './ModelGroupCreateWithoutProviderInput.schema';
import { ModelGroupUncheckedCreateWithoutProviderInputObjectSchema as ModelGroupUncheckedCreateWithoutProviderInputObjectSchema } from './ModelGroupUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelGroupCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const ModelGroupCreateOrConnectWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateOrConnectWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateOrConnectWithoutProviderInput>;
export const ModelGroupCreateOrConnectWithoutProviderInputObjectZodSchema = makeSchema();
