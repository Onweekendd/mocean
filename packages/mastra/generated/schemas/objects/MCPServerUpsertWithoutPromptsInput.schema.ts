import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateWithoutPromptsInputObjectSchema as MCPServerUpdateWithoutPromptsInputObjectSchema } from './MCPServerUpdateWithoutPromptsInput.schema';
import { MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema as MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutPromptsInput.schema';
import { MCPServerCreateWithoutPromptsInputObjectSchema as MCPServerCreateWithoutPromptsInputObjectSchema } from './MCPServerCreateWithoutPromptsInput.schema';
import { MCPServerUncheckedCreateWithoutPromptsInputObjectSchema as MCPServerUncheckedCreateWithoutPromptsInputObjectSchema } from './MCPServerUncheckedCreateWithoutPromptsInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MCPServerUpdateWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPServerCreateWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutPromptsInputObjectSchema)]),
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerUpsertWithoutPromptsInputObjectSchema: z.ZodType<Prisma.MCPServerUpsertWithoutPromptsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpsertWithoutPromptsInput>;
export const MCPServerUpsertWithoutPromptsInputObjectZodSchema = makeSchema();
