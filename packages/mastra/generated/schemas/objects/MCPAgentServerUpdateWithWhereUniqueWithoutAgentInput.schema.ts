import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerUpdateWithoutAgentInputObjectSchema as MCPAgentServerUpdateWithoutAgentInputObjectSchema } from './MCPAgentServerUpdateWithoutAgentInput.schema';
import { MCPAgentServerUncheckedUpdateWithoutAgentInputObjectSchema as MCPAgentServerUncheckedUpdateWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedUpdateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MCPAgentServerUpdateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedUpdateWithoutAgentInputObjectSchema)])
}).strict();
export const MCPAgentServerUpdateWithWhereUniqueWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateWithWhereUniqueWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateWithWhereUniqueWithoutAgentInput>;
export const MCPAgentServerUpdateWithWhereUniqueWithoutAgentInputObjectZodSchema = makeSchema();
