import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutAssistantsInputObjectSchema as MCPServerCreateWithoutAssistantsInputObjectSchema } from './MCPServerCreateWithoutAssistantsInput.schema';
import { MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema as MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAssistantsInput.schema';
import { MCPServerCreateOrConnectWithoutAssistantsInputObjectSchema as MCPServerCreateOrConnectWithoutAssistantsInputObjectSchema } from './MCPServerCreateOrConnectWithoutAssistantsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutAssistantsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const MCPServerCreateNestedOneWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateNestedOneWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateNestedOneWithoutAssistantsInput>;
export const MCPServerCreateNestedOneWithoutAssistantsInputObjectZodSchema = makeSchema();
