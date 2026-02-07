import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './MCPResourceWhereUniqueInput.schema';
import { MCPResourceUpdateWithoutServerInputObjectSchema as MCPResourceUpdateWithoutServerInputObjectSchema } from './MCPResourceUpdateWithoutServerInput.schema';
import { MCPResourceUncheckedUpdateWithoutServerInputObjectSchema as MCPResourceUncheckedUpdateWithoutServerInputObjectSchema } from './MCPResourceUncheckedUpdateWithoutServerInput.schema';
import { MCPResourceCreateWithoutServerInputObjectSchema as MCPResourceCreateWithoutServerInputObjectSchema } from './MCPResourceCreateWithoutServerInput.schema';
import { MCPResourceUncheckedCreateWithoutServerInputObjectSchema as MCPResourceUncheckedCreateWithoutServerInputObjectSchema } from './MCPResourceUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPResourceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MCPResourceUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPResourceCreateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MCPResourceUpsertWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPResourceUpsertWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceUpsertWithWhereUniqueWithoutServerInput>;
export const MCPResourceUpsertWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
