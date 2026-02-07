import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerUpdateWithoutMcpServerInputObjectSchema as MCPAgentServerUpdateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUpdateWithoutMcpServerInput.schema';
import { MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectSchema as MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUncheckedUpdateWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MCPAgentServerUpdateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInput>;
export const MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInputObjectZodSchema = makeSchema();
