import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCreateWithoutModelsInputObjectSchema as GroupCreateWithoutModelsInputObjectSchema } from './GroupCreateWithoutModelsInput.schema';
import { GroupUncheckedCreateWithoutModelsInputObjectSchema as GroupUncheckedCreateWithoutModelsInputObjectSchema } from './GroupUncheckedCreateWithoutModelsInput.schema';
import { GroupCreateOrConnectWithoutModelsInputObjectSchema as GroupCreateOrConnectWithoutModelsInputObjectSchema } from './GroupCreateOrConnectWithoutModelsInput.schema';
import { GroupUpsertWithoutModelsInputObjectSchema as GroupUpsertWithoutModelsInputObjectSchema } from './GroupUpsertWithoutModelsInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateToOneWithWhereWithoutModelsInputObjectSchema as GroupUpdateToOneWithWhereWithoutModelsInputObjectSchema } from './GroupUpdateToOneWithWhereWithoutModelsInput.schema';
import { GroupUpdateWithoutModelsInputObjectSchema as GroupUpdateWithoutModelsInputObjectSchema } from './GroupUpdateWithoutModelsInput.schema';
import { GroupUncheckedUpdateWithoutModelsInputObjectSchema as GroupUncheckedUpdateWithoutModelsInputObjectSchema } from './GroupUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutModelsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutModelsInputObjectSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GroupUpdateToOneWithWhereWithoutModelsInputObjectSchema), z.lazy(() => GroupUpdateWithoutModelsInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutModelsInputObjectSchema)]).optional()
}).strict();
export const GroupUpdateOneRequiredWithoutModelsNestedInputObjectSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutModelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateOneRequiredWithoutModelsNestedInput>;
export const GroupUpdateOneRequiredWithoutModelsNestedInputObjectZodSchema = makeSchema();
