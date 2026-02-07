import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerCreateWithoutAgentInputObjectSchema as MCPAgentServerCreateWithoutAgentInputObjectSchema } from './MCPAgentServerCreateWithoutAgentInput.schema';
import { MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema as MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedCreateWithoutAgentInput.schema';
import { MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema as MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema } from './MCPAgentServerCreateOrConnectWithoutAgentInput.schema';
import { MCPAgentServerUpsertWithWhereUniqueWithoutAgentInputObjectSchema as MCPAgentServerUpsertWithWhereUniqueWithoutAgentInputObjectSchema } from './MCPAgentServerUpsertWithWhereUniqueWithoutAgentInput.schema';
import { MCPAgentServerCreateManyAgentInputEnvelopeObjectSchema as MCPAgentServerCreateManyAgentInputEnvelopeObjectSchema } from './MCPAgentServerCreateManyAgentInputEnvelope.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerUpdateWithWhereUniqueWithoutAgentInputObjectSchema as MCPAgentServerUpdateWithWhereUniqueWithoutAgentInputObjectSchema } from './MCPAgentServerUpdateWithWhereUniqueWithoutAgentInput.schema';
import { MCPAgentServerUpdateManyWithWhereWithoutAgentInputObjectSchema as MCPAgentServerUpdateManyWithWhereWithoutAgentInputObjectSchema } from './MCPAgentServerUpdateManyWithWhereWithoutAgentInput.schema';
import { MCPAgentServerScalarWhereInputObjectSchema as MCPAgentServerScalarWhereInputObjectSchema } from './MCPAgentServerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAgentServerCreateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerCreateWithoutAgentInputObjectSchema).array(), z.lazy(() => MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerCreateOrConnectWithoutAgentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MCPAgentServerUpsertWithWhereUniqueWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUpsertWithWhereUniqueWithoutAgentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAgentServerCreateManyAgentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAgentServerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MCPAgentServerUpdateWithWhereUniqueWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUpdateWithWhereUniqueWithoutAgentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MCPAgentServerUpdateManyWithWhereWithoutAgentInputObjectSchema), z.lazy(() => MCPAgentServerUpdateManyWithWhereWithoutAgentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema), z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MCPAgentServerUpdateManyWithoutAgentNestedInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateManyWithoutAgentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateManyWithoutAgentNestedInput>;
export const MCPAgentServerUpdateManyWithoutAgentNestedInputObjectZodSchema = makeSchema();
