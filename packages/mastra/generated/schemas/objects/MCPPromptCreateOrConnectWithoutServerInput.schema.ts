import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './MCPPromptWhereUniqueInput.schema';
import { MCPPromptCreateWithoutServerInputObjectSchema as MCPPromptCreateWithoutServerInputObjectSchema } from './MCPPromptCreateWithoutServerInput.schema';
import { MCPPromptUncheckedCreateWithoutServerInputObjectSchema as MCPPromptUncheckedCreateWithoutServerInputObjectSchema } from './MCPPromptUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPPromptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPPromptCreateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MCPPromptCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPPromptCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptCreateOrConnectWithoutServerInput>;
export const MCPPromptCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
