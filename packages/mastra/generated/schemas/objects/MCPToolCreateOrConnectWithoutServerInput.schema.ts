import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './MCPToolWhereUniqueInput.schema';
import { MCPToolCreateWithoutServerInputObjectSchema as MCPToolCreateWithoutServerInputObjectSchema } from './MCPToolCreateWithoutServerInput.schema';
import { MCPToolUncheckedCreateWithoutServerInputObjectSchema as MCPToolUncheckedCreateWithoutServerInputObjectSchema } from './MCPToolUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPToolWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPToolCreateWithoutServerInputObjectSchema), z.lazy(() => MCPToolUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MCPToolCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPToolCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolCreateOrConnectWithoutServerInput>;
export const MCPToolCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
