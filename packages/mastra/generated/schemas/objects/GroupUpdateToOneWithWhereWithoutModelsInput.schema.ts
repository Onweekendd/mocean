import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema';
import { GroupUpdateWithoutModelsInputObjectSchema as GroupUpdateWithoutModelsInputObjectSchema } from './GroupUpdateWithoutModelsInput.schema';
import { GroupUncheckedUpdateWithoutModelsInputObjectSchema as GroupUncheckedUpdateWithoutModelsInputObjectSchema } from './GroupUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GroupUpdateWithoutModelsInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutModelsInputObjectSchema)])
}).strict();
export const GroupUpdateToOneWithWhereWithoutModelsInputObjectSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutModelsInput>;
export const GroupUpdateToOneWithWhereWithoutModelsInputObjectZodSchema = makeSchema();
