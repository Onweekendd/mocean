import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerUpdateWithoutMcpServerInputObjectSchema as MCPAgentServerUpdateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUpdateWithoutMcpServerInput.schema';
import { MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectSchema as MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUncheckedUpdateWithoutMcpServerInput.schema';
import { MCPAgentServerCreateWithoutMcpServerInputObjectSchema as MCPAgentServerCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerCreateWithoutMcpServerInput.schema';
import { MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MCPAgentServerUpdateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInput>;
export const MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInputObjectZodSchema = makeSchema();
