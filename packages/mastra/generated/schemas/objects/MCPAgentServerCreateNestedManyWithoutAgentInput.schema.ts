import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerCreateWithoutAgentInputObjectSchema as MCPAgentServerCreateWithoutAgentInputObjectSchema } from './MCPAgentServerCreateWithoutAgentInput.schema';
import { MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema as MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutAgentInput.schema';
import { MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema as MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema } from './MCPAgentServerCreateOrConnectWithoutAgentInput.schema';
import { MCPAgentServerCreateManyAgentInputEnvelopeObjectSchema as MCPAgentServerCreateManyAgentInputEnvelopeObjectSchema } from './MCPAgentServerCreateManyAgentInputEnvelope.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerCreateWithoutAgentInputObjectSchema).array(), z.lazy(() => MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAgentServerCreateManyAgentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MCPAgentServerCreateNestedManyWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateNestedManyWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateNestedManyWithoutAgentInput>;
export const MCPAgentServerCreateNestedManyWithoutAgentInputObjectZodSchema = makeSchema();
