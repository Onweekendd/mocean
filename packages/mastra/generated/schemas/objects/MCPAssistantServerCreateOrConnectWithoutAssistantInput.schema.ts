import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerCreateWithoutAssistantInputObjectSchema as MCPAssistantServerCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerCreateWithoutAssistantInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema)])
}).strict();
export const MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateOrConnectWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateOrConnectWithoutAssistantInput>;
export const MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectZodSchema = makeSchema();
