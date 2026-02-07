import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithoutProviderInputObjectSchema as ModelGroupUpdateWithoutProviderInputObjectSchema } from './ModelGroupUpdateWithoutProviderInput.schema';
import { ModelGroupUncheckedUpdateWithoutProviderInputObjectSchema as ModelGroupUncheckedUpdateWithoutProviderInputObjectSchema } from './ModelGroupUncheckedUpdateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelGroupUpdateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateWithoutProviderInputObjectSchema)])
}).strict();
export const ModelGroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateWithWhereUniqueWithoutProviderInput>;
export const ModelGroupUpdateWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
