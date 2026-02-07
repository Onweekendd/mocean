import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCreateWithoutModelsInputObjectSchema as GroupCreateWithoutModelsInputObjectSchema } from './GroupCreateWithoutModelsInput.schema';
import { GroupUncheckedCreateWithoutModelsInputObjectSchema as GroupUncheckedCreateWithoutModelsInputObjectSchema } from './GroupUncheckedCreateWithoutModelsInput.schema';
import { GroupCreateOrConnectWithoutModelsInputObjectSchema as GroupCreateOrConnectWithoutModelsInputObjectSchema } from './GroupCreateOrConnectWithoutModelsInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutModelsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputObjectSchema).optional()
}).strict();
export const GroupCreateNestedOneWithoutModelsInputObjectSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateNestedOneWithoutModelsInput>;
export const GroupCreateNestedOneWithoutModelsInputObjectZodSchema = makeSchema();
