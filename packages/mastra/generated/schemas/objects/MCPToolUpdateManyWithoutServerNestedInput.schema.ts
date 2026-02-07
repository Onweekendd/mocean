import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolCreateWithoutServerInputObjectSchema as MCPToolCreateWithoutServerInputObjectSchema } from './MCPToolCreateWithoutServerInput.schema';
import { MCPToolUncheckedCreateWithoutServerInputObjectSchema as MCPToolUncheckedCreateWithoutServerInputObjectSchema } from './MCPToolUncheckedCreateWithoutServerInput.schema';
import { MCPToolCreateOrConnectWithoutServerInputObjectSchema as MCPToolCreateOrConnectWithoutServerInputObjectSchema } from './MCPToolCreateOrConnectWithoutServerInput.schema';
import { MCPToolUpsertWithWhereUniqueWithoutServerInputObjectSchema as MCPToolUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './MCPToolUpsertWithWhereUniqueWithoutServerInput.schema';
import { MCPToolCreateManyServerInputEnvelopeObjectSchema as MCPToolCreateManyServerInputEnvelopeObjectSchema } from './MCPToolCreateManyServerInputEnvelope.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './MCPToolWhereUniqueInput.schema';
import { MCPToolUpdateWithWhereUniqueWithoutServerInputObjectSchema as MCPToolUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './MCPToolUpdateWithWhereUniqueWithoutServerInput.schema';
import { MCPToolUpdateManyWithWhereWithoutServerInputObjectSchema as MCPToolUpdateManyWithWhereWithoutServerInputObjectSchema } from './MCPToolUpdateManyWithWhereWithoutServerInput.schema';
import { MCPToolScalarWhereInputObjectSchema as MCPToolScalarWhereInputObjectSchema } from './MCPToolScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPToolCreateWithoutServerInputObjectSchema), z.lazy(() => MCPToolCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MCPToolUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MCPToolUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPToolCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MCPToolCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MCPToolUpsertWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MCPToolUpsertWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPToolCreateManyServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MCPToolWhereUniqueInputObjectSchema), z.lazy(() => MCPToolWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MCPToolWhereUniqueInputObjectSchema), z.lazy(() => MCPToolWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MCPToolWhereUniqueInputObjectSchema), z.lazy(() => MCPToolWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MCPToolWhereUniqueInputObjectSchema), z.lazy(() => MCPToolWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MCPToolUpdateWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MCPToolUpdateWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MCPToolUpdateManyWithWhereWithoutServerInputObjectSchema), z.lazy(() => MCPToolUpdateManyWithWhereWithoutServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MCPToolScalarWhereInputObjectSchema), z.lazy(() => MCPToolScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MCPToolUpdateManyWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.MCPToolUpdateManyWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolUpdateManyWithoutServerNestedInput>;
export const MCPToolUpdateManyWithoutServerNestedInputObjectZodSchema = makeSchema();
