import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutPromptsInputObjectSchema as MCPServerCreateWithoutPromptsInputObjectSchema } from './MCPServerCreateWithoutPromptsInput.schema';
import { MCPServerUncheckedCreateWithoutPromptsInputObjectSchema as MCPServerUncheckedCreateWithoutPromptsInputObjectSchema } from './MCPServerUncheckedCreateWithoutPromptsInput.schema';
import { MCPServerCreateOrConnectWithoutPromptsInputObjectSchema as MCPServerCreateOrConnectWithoutPromptsInputObjectSchema } from './MCPServerCreateOrConnectWithoutPromptsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutPromptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutPromptsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const MCPServerCreateNestedOneWithoutPromptsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateNestedOneWithoutPromptsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateNestedOneWithoutPromptsInput>;
export const MCPServerCreateNestedOneWithoutPromptsInputObjectZodSchema = makeSchema();
