import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerCreateWithoutMcpServerInputObjectSchema as MCPAgentServerCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerCreateWithoutMcpServerInput.schema';
import { MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutMcpServerInput.schema';
import { MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema as MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema } from './MCPAgentServerCreateOrConnectWithoutMcpServerInput.schema';
import { MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema as MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema } from './MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInput.schema';
import { MCPAgentServerCreateManyMcpServerInputEnvelopeObjectSchema as MCPAgentServerCreateManyMcpServerInputEnvelopeObjectSchema } from './MCPAgentServerCreateManyMcpServerInputEnvelope.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema as MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema } from './MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInput.schema';
import { MCPAgentServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema as MCPAgentServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema } from './MCPAgentServerUpdateManyWithWhereWithoutMcpServerInput.schema';
import { MCPAgentServerScalarWhereInputObjectSchema as MCPAgentServerScalarWhereInputObjectSchema } from './MCPAgentServerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerCreateWithoutMcpServerInputObjectSchema).array(), z.lazy(() => MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerCreateOrConnectWithoutMcpServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAgentServerCreateManyMcpServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MCPAgentServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema), z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInput>;
export const MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectZodSchema = makeSchema();
