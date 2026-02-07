import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptCreateWithoutServerInputObjectSchema as MCPPromptCreateWithoutServerInputObjectSchema } from './MCPPromptCreateWithoutServerInput.schema';
import { MCPPromptUncheckedCreateWithoutServerInputObjectSchema as MCPPromptUncheckedCreateWithoutServerInputObjectSchema } from './MCPPromptUncheckedCreateWithoutServerInput.schema';
import { MCPPromptCreateOrConnectWithoutServerInputObjectSchema as MCPPromptCreateOrConnectWithoutServerInputObjectSchema } from './MCPPromptCreateOrConnectWithoutServerInput.schema';
import { MCPPromptUpsertWithWhereUniqueWithoutServerInputObjectSchema as MCPPromptUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './MCPPromptUpsertWithWhereUniqueWithoutServerInput.schema';
import { MCPPromptCreateManyServerInputEnvelopeObjectSchema as MCPPromptCreateManyServerInputEnvelopeObjectSchema } from './MCPPromptCreateManyServerInputEnvelope.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './MCPPromptWhereUniqueInput.schema';
import { MCPPromptUpdateWithWhereUniqueWithoutServerInputObjectSchema as MCPPromptUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './MCPPromptUpdateWithWhereUniqueWithoutServerInput.schema';
import { MCPPromptUpdateManyWithWhereWithoutServerInputObjectSchema as MCPPromptUpdateManyWithWhereWithoutServerInputObjectSchema } from './MCPPromptUpdateManyWithWhereWithoutServerInput.schema';
import { MCPPromptScalarWhereInputObjectSchema as MCPPromptScalarWhereInputObjectSchema } from './MCPPromptScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPPromptCreateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MCPPromptUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPPromptCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MCPPromptCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MCPPromptUpsertWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUpsertWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPPromptCreateManyServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MCPPromptWhereUniqueInputObjectSchema), z.lazy(() => MCPPromptWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MCPPromptWhereUniqueInputObjectSchema), z.lazy(() => MCPPromptWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MCPPromptWhereUniqueInputObjectSchema), z.lazy(() => MCPPromptWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MCPPromptWhereUniqueInputObjectSchema), z.lazy(() => MCPPromptWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MCPPromptUpdateWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUpdateWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MCPPromptUpdateManyWithWhereWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUpdateManyWithWhereWithoutServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MCPPromptScalarWhereInputObjectSchema), z.lazy(() => MCPPromptScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MCPPromptUpdateManyWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.MCPPromptUpdateManyWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptUpdateManyWithoutServerNestedInput>;
export const MCPPromptUpdateManyWithoutServerNestedInputObjectZodSchema = makeSchema();
