import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './MCPToolWhereUniqueInput.schema';
import { MCPToolUpdateWithoutServerInputObjectSchema as MCPToolUpdateWithoutServerInputObjectSchema } from './MCPToolUpdateWithoutServerInput.schema';
import { MCPToolUncheckedUpdateWithoutServerInputObjectSchema as MCPToolUncheckedUpdateWithoutServerInputObjectSchema } from './MCPToolUncheckedUpdateWithoutServerInput.schema';
import { MCPToolCreateWithoutServerInputObjectSchema as MCPToolCreateWithoutServerInputObjectSchema } from './MCPToolCreateWithoutServerInput.schema';
import { MCPToolUncheckedCreateWithoutServerInputObjectSchema as MCPToolUncheckedCreateWithoutServerInputObjectSchema } from './MCPToolUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPToolWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MCPToolUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPToolUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPToolCreateWithoutServerInputObjectSchema), z.lazy(() => MCPToolUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MCPToolUpsertWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPToolUpsertWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolUpsertWithWhereUniqueWithoutServerInput>;
export const MCPToolUpsertWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
