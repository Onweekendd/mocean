import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerCreateWithoutAgentInputObjectSchema as MCPAgentServerCreateWithoutAgentInputObjectSchema } from './MCPAgentServerCreateWithoutAgentInput.schema';
import { MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema as MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema)])
}).strict();
export const MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateOrConnectWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateOrConnectWithoutAgentInput>;
export const MCPAgentServerCreateOrConnectWithoutAgentInputObjectZodSchema = makeSchema();
