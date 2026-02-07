import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerCreateWithoutPromptsInputObjectSchema as MCPServerCreateWithoutPromptsInputObjectSchema } from './MCPServerCreateWithoutPromptsInput.schema';
import { MCPServerUncheckedCreateWithoutPromptsInputObjectSchema as MCPServerUncheckedCreateWithoutPromptsInputObjectSchema } from './MCPServerUncheckedCreateWithoutPromptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPServerCreateWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutPromptsInputObjectSchema)])
}).strict();
export const MCPServerCreateOrConnectWithoutPromptsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateOrConnectWithoutPromptsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateOrConnectWithoutPromptsInput>;
export const MCPServerCreateOrConnectWithoutPromptsInputObjectZodSchema = makeSchema();
