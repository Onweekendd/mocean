import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerUpdateWithoutMcpServerInputObjectSchema as MCPAssistantServerUpdateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUpdateWithoutMcpServerInput.schema';
import { MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectSchema as MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUncheckedUpdateWithoutMcpServerInput.schema';
import { MCPAssistantServerCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerCreateWithoutMcpServerInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MCPAssistantServerUpdateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInput>;
export const MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInputObjectZodSchema = makeSchema();
