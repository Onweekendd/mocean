import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupUpdateWithoutModelsInputObjectSchema as GroupUpdateWithoutModelsInputObjectSchema } from './GroupUpdateWithoutModelsInput.schema';
import { GroupUncheckedUpdateWithoutModelsInputObjectSchema as GroupUncheckedUpdateWithoutModelsInputObjectSchema } from './GroupUncheckedUpdateWithoutModelsInput.schema';
import { GroupCreateWithoutModelsInputObjectSchema as GroupCreateWithoutModelsInputObjectSchema } from './GroupCreateWithoutModelsInput.schema';
import { GroupUncheckedCreateWithoutModelsInputObjectSchema as GroupUncheckedCreateWithoutModelsInputObjectSchema } from './GroupUncheckedCreateWithoutModelsInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GroupUpdateWithoutModelsInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutModelsInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutModelsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutModelsInputObjectSchema)]),
  where: z.lazy(() => GroupWhereInputObjectSchema).optional()
}).strict();
export const GroupUpsertWithoutModelsInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithoutModelsInput>;
export const GroupUpsertWithoutModelsInputObjectZodSchema = makeSchema();
