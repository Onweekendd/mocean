import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerCreateWithoutMcpServerInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateOrConnectWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateOrConnectWithoutMcpServerInput>;
export const MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectZodSchema = makeSchema();
