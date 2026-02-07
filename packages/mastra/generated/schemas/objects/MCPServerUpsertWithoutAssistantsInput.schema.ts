import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateWithoutAssistantsInputObjectSchema as MCPServerUpdateWithoutAssistantsInputObjectSchema } from './MCPServerUpdateWithoutAssistantsInput.schema';
import { MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema as MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutAssistantsInput.schema';
import { MCPServerCreateWithoutAssistantsInputObjectSchema as MCPServerCreateWithoutAssistantsInputObjectSchema } from './MCPServerCreateWithoutAssistantsInput.schema';
import { MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema as MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAssistantsInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MCPServerUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPServerCreateWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema)]),
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerUpsertWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.MCPServerUpsertWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpsertWithoutAssistantsInput>;
export const MCPServerUpsertWithoutAssistantsInputObjectZodSchema = makeSchema();
