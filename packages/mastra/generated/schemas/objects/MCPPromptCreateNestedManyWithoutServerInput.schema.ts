import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptCreateWithoutServerInputObjectSchema as MCPPromptCreateWithoutServerInputObjectSchema } from './MCPPromptCreateWithoutServerInput.schema';
import { MCPPromptUncheckedCreateWithoutServerInputObjectSchema as MCPPromptUncheckedCreateWithoutServerInputObjectSchema } from './MCPPromptUncheckedCreateWithoutServerInput.schema';
import { MCPPromptCreateOrConnectWithoutServerInputObjectSchema as MCPPromptCreateOrConnectWithoutServerInputObjectSchema } from './MCPPromptCreateOrConnectWithoutServerInput.schema';
import { MCPPromptCreateManyServerInputEnvelopeObjectSchema as MCPPromptCreateManyServerInputEnvelopeObjectSchema } from './MCPPromptCreateManyServerInputEnvelope.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './MCPPromptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPPromptCreateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MCPPromptUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPPromptCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MCPPromptCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPPromptCreateManyServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MCPPromptWhereUniqueInputObjectSchema), z.lazy(() => MCPPromptWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MCPPromptCreateNestedManyWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPPromptCreateNestedManyWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptCreateNestedManyWithoutServerInput>;
export const MCPPromptCreateNestedManyWithoutServerInputObjectZodSchema = makeSchema();
