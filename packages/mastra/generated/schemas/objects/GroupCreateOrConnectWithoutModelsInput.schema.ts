import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutModelsInputObjectSchema as GroupCreateWithoutModelsInputObjectSchema } from './GroupCreateWithoutModelsInput.schema';
import { GroupUncheckedCreateWithoutModelsInputObjectSchema as GroupUncheckedCreateWithoutModelsInputObjectSchema } from './GroupUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutModelsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutModelsInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutModelsInput>;
export const GroupCreateOrConnectWithoutModelsInputObjectZodSchema = makeSchema();
