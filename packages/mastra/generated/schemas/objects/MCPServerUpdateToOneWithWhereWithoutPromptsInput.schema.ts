import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema';
import { MCPServerUpdateWithoutPromptsInputObjectSchema as MCPServerUpdateWithoutPromptsInputObjectSchema } from './MCPServerUpdateWithoutPromptsInput.schema';
import { MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema as MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutPromptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MCPServerUpdateWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema)])
}).strict();
export const MCPServerUpdateToOneWithWhereWithoutPromptsInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutPromptsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutPromptsInput>;
export const MCPServerUpdateToOneWithWhereWithoutPromptsInputObjectZodSchema = makeSchema();
