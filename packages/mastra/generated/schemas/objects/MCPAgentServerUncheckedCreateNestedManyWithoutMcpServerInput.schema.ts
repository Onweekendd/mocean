import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerCreateWithoutMcpServerInputObjectSchema as MCPAgentServerCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerCreateWithoutMcpServerInput.schema';
import { MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutMcpServerInput.schema';
import { MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema as MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema } from './MCPAgentServerCreateOrConnectWithoutMcpServerInput.schema';
import { MCPAgentServerCreateManyMcpServerInputEnvelopeObjectSchema as MCPAgentServerCreateManyMcpServerInputEnvelopeObjectSchema } from './MCPAgentServerCreateManyMcpServerInputEnvelope.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerCreateWithoutMcpServerInputObjectSchema).array(), z.lazy(() => MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAgentServerCreateManyMcpServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MCPAgentServerUncheckedCreateNestedManyWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedCreateNestedManyWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedCreateNestedManyWithoutMcpServerInput>;
export const MCPAgentServerUncheckedCreateNestedManyWithoutMcpServerInputObjectZodSchema = makeSchema();
