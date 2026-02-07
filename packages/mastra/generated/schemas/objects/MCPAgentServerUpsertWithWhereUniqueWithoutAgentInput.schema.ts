import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerUpdateWithoutAgentInputObjectSchema as MCPAgentServerUpdateWithoutAgentInputObjectSchema } from './MCPAgentServerUpdateWithoutAgentInput.schema';
import { MCPAgentServerUncheckedUpdateWithoutAgentInputObjectSchema as MCPAgentServerUncheckedUpdateWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedUpdateWithoutAgentInput.schema';
import { MCPAgentServerCreateWithoutAgentInputObjectSchema as MCPAgentServerCreateWithoutAgentInputObjectSchema } from './MCPAgentServerCreateWithoutAgentInput.schema';
import { MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema as MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MCPAgentServerUpdateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedUpdateWithoutAgentInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema)])
}).strict();
export const MCPAgentServerUpsertWithWhereUniqueWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpsertWithWhereUniqueWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpsertWithWhereUniqueWithoutAgentInput>;
export const MCPAgentServerUpsertWithWhereUniqueWithoutAgentInputObjectZodSchema = makeSchema();
