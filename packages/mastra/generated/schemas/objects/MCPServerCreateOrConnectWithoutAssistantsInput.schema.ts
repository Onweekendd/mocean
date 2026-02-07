import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerCreateWithoutAssistantsInputObjectSchema as MCPServerCreateWithoutAssistantsInputObjectSchema } from './MCPServerCreateWithoutAssistantsInput.schema';
import { MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema as MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPServerCreateWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema)])
}).strict();
export const MCPServerCreateOrConnectWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateOrConnectWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateOrConnectWithoutAssistantsInput>;
export const MCPServerCreateOrConnectWithoutAssistantsInputObjectZodSchema = makeSchema();
