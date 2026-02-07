import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceCreateWithoutServerInputObjectSchema as MCPResourceCreateWithoutServerInputObjectSchema } from './MCPResourceCreateWithoutServerInput.schema';
import { MCPResourceUncheckedCreateWithoutServerInputObjectSchema as MCPResourceUncheckedCreateWithoutServerInputObjectSchema } from './MCPResourceUncheckedCreateWithoutServerInput.schema';
import { MCPResourceCreateOrConnectWithoutServerInputObjectSchema as MCPResourceCreateOrConnectWithoutServerInputObjectSchema } from './MCPResourceCreateOrConnectWithoutServerInput.schema';
import { MCPResourceUpsertWithWhereUniqueWithoutServerInputObjectSchema as MCPResourceUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './MCPResourceUpsertWithWhereUniqueWithoutServerInput.schema';
import { MCPResourceCreateManyServerInputEnvelopeObjectSchema as MCPResourceCreateManyServerInputEnvelopeObjectSchema } from './MCPResourceCreateManyServerInputEnvelope.schema';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './MCPResourceWhereUniqueInput.schema';
import { MCPResourceUpdateWithWhereUniqueWithoutServerInputObjectSchema as MCPResourceUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './MCPResourceUpdateWithWhereUniqueWithoutServerInput.schema';
import { MCPResourceUpdateManyWithWhereWithoutServerInputObjectSchema as MCPResourceUpdateManyWithWhereWithoutServerInputObjectSchema } from './MCPResourceUpdateManyWithWhereWithoutServerInput.schema';
import { MCPResourceScalarWhereInputObjectSchema as MCPResourceScalarWhereInputObjectSchema } from './MCPResourceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPResourceCreateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MCPResourceUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPResourceCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MCPResourceCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MCPResourceUpsertWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUpsertWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPResourceCreateManyServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MCPResourceWhereUniqueInputObjectSchema), z.lazy(() => MCPResourceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MCPResourceWhereUniqueInputObjectSchema), z.lazy(() => MCPResourceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MCPResourceWhereUniqueInputObjectSchema), z.lazy(() => MCPResourceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MCPResourceWhereUniqueInputObjectSchema), z.lazy(() => MCPResourceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MCPResourceUpdateWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUpdateWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MCPResourceUpdateManyWithWhereWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUpdateManyWithWhereWithoutServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MCPResourceScalarWhereInputObjectSchema), z.lazy(() => MCPResourceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MCPResourceUpdateManyWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.MCPResourceUpdateManyWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceUpdateManyWithoutServerNestedInput>;
export const MCPResourceUpdateManyWithoutServerNestedInputObjectZodSchema = makeSchema();
