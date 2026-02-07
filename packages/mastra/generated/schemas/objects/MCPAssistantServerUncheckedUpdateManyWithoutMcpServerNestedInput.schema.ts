import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerCreateWithoutMcpServerInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutMcpServerInput.schema';
import { MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema as MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema } from './MCPAssistantServerCreateOrConnectWithoutMcpServerInput.schema';
import { MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema as MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInput.schema';
import { MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectSchema as MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectSchema } from './MCPAssistantServerCreateManyMcpServerInputEnvelope.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema as MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInput.schema';
import { MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema as MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInput.schema';
import { MCPAssistantServerScalarWhereInputObjectSchema as MCPAssistantServerScalarWhereInputObjectSchema } from './MCPAssistantServerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerCreateWithoutMcpServerInputObjectSchema).array(), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerCreateOrConnectWithoutMcpServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUpsertWithWhereUniqueWithoutMcpServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUpdateWithWhereUniqueWithoutMcpServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema), z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInput>;
export const MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectZodSchema = makeSchema();
