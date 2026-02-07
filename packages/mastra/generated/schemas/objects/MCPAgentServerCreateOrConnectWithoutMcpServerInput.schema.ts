import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerCreateWithoutMcpServerInputObjectSchema as MCPAgentServerCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerCreateWithoutMcpServerInput.schema';
import { MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateOrConnectWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateOrConnectWithoutMcpServerInput>;
export const MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectZodSchema = makeSchema();
