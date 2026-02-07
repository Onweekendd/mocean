import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './MCPToolWhereUniqueInput.schema';
import { MCPToolUpdateWithoutServerInputObjectSchema as MCPToolUpdateWithoutServerInputObjectSchema } from './MCPToolUpdateWithoutServerInput.schema';
import { MCPToolUncheckedUpdateWithoutServerInputObjectSchema as MCPToolUncheckedUpdateWithoutServerInputObjectSchema } from './MCPToolUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPToolWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MCPToolUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPToolUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const MCPToolUpdateWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPToolUpdateWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolUpdateWithWhereUniqueWithoutServerInput>;
export const MCPToolUpdateWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
