import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithoutGroupInputObjectSchema as ModelGroupUpdateWithoutGroupInputObjectSchema } from './ModelGroupUpdateWithoutGroupInput.schema';
import { ModelGroupUncheckedUpdateWithoutGroupInputObjectSchema as ModelGroupUncheckedUpdateWithoutGroupInputObjectSchema } from './ModelGroupUncheckedUpdateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelGroupUpdateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
export const ModelGroupUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateWithWhereUniqueWithoutGroupInput>;
export const ModelGroupUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
