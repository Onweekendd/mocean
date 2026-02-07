import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerCreateWithoutMcpServerInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutMcpServerInput.schema';
import { MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema as MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema } from './MCPAssistantServerCreateOrConnectWithoutMcpServerInput.schema';
import { MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectSchema as MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectSchema } from './MCPAssistantServerCreateManyMcpServerInputEnvelope.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerCreateWithoutMcpServerInputObjectSchema).array(), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MCPAssistantServerCreateNestedManyWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateNestedManyWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateNestedManyWithoutMcpServerInput>;
export const MCPAssistantServerCreateNestedManyWithoutMcpServerInputObjectZodSchema = makeSchema();
