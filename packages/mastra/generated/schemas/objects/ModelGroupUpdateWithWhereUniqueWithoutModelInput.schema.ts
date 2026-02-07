import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithoutModelInputObjectSchema as ModelGroupUpdateWithoutModelInputObjectSchema } from './ModelGroupUpdateWithoutModelInput.schema';
import { ModelGroupUncheckedUpdateWithoutModelInputObjectSchema as ModelGroupUncheckedUpdateWithoutModelInputObjectSchema } from './ModelGroupUncheckedUpdateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelGroupUpdateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateWithoutModelInputObjectSchema)])
}).strict();
export const ModelGroupUpdateWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateWithWhereUniqueWithoutModelInput>;
export const ModelGroupUpdateWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
