import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceCreateWithoutServerInputObjectSchema as MCPResourceCreateWithoutServerInputObjectSchema } from './MCPResourceCreateWithoutServerInput.schema';
import { MCPResourceUncheckedCreateWithoutServerInputObjectSchema as MCPResourceUncheckedCreateWithoutServerInputObjectSchema } from './MCPResourceUncheckedCreateWithoutServerInput.schema';
import { MCPResourceCreateOrConnectWithoutServerInputObjectSchema as MCPResourceCreateOrConnectWithoutServerInputObjectSchema } from './MCPResourceCreateOrConnectWithoutServerInput.schema';
import { MCPResourceCreateManyServerInputEnvelopeObjectSchema as MCPResourceCreateManyServerInputEnvelopeObjectSchema } from './MCPResourceCreateManyServerInputEnvelope.schema';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './MCPResourceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPResourceCreateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MCPResourceUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPResourceCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MCPResourceCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPResourceCreateManyServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MCPResourceWhereUniqueInputObjectSchema), z.lazy(() => MCPResourceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MCPResourceUncheckedCreateNestedManyWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPResourceUncheckedCreateNestedManyWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceUncheckedCreateNestedManyWithoutServerInput>;
export const MCPResourceUncheckedCreateNestedManyWithoutServerInputObjectZodSchema = makeSchema();
