import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerUpdateWithoutMcpServerInputObjectSchema as MCPAssistantServerUpdateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUpdateWithoutMcpServerInput.schema';
import { MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectSchema as MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUncheckedUpdateWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MCPAssistantServerUpdateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInput>;
export const MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInputObjectZodSchema = makeSchema();
