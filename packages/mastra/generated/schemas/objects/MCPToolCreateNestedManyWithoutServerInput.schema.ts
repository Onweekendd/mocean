import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolCreateWithoutServerInputObjectSchema as MCPToolCreateWithoutServerInputObjectSchema } from './MCPToolCreateWithoutServerInput.schema';
import { MCPToolUncheckedCreateWithoutServerInputObjectSchema as MCPToolUncheckedCreateWithoutServerInputObjectSchema } from './MCPToolUncheckedCreateWithoutServerInput.schema';
import { MCPToolCreateOrConnectWithoutServerInputObjectSchema as MCPToolCreateOrConnectWithoutServerInputObjectSchema } from './MCPToolCreateOrConnectWithoutServerInput.schema';
import { MCPToolCreateManyServerInputEnvelopeObjectSchema as MCPToolCreateManyServerInputEnvelopeObjectSchema } from './MCPToolCreateManyServerInputEnvelope.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './MCPToolWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPToolCreateWithoutServerInputObjectSchema), z.lazy(() => MCPToolCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MCPToolUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MCPToolUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPToolCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MCPToolCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPToolCreateManyServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MCPToolWhereUniqueInputObjectSchema), z.lazy(() => MCPToolWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MCPToolCreateNestedManyWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPToolCreateNestedManyWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolCreateNestedManyWithoutServerInput>;
export const MCPToolCreateNestedManyWithoutServerInputObjectZodSchema = makeSchema();
