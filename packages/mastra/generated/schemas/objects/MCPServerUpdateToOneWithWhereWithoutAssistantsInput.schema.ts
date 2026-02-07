import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema';
import { MCPServerUpdateWithoutAssistantsInputObjectSchema as MCPServerUpdateWithoutAssistantsInputObjectSchema } from './MCPServerUpdateWithoutAssistantsInput.schema';
import { MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema as MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MCPServerUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema)])
}).strict();
export const MCPServerUpdateToOneWithWhereWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutAssistantsInput>;
export const MCPServerUpdateToOneWithWhereWithoutAssistantsInputObjectZodSchema = makeSchema();
