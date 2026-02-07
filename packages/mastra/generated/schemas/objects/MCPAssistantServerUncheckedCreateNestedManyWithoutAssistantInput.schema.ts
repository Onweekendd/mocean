import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerCreateWithoutAssistantInputObjectSchema as MCPAssistantServerCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerCreateWithoutAssistantInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutAssistantInput.schema';
import { MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema as MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema } from './MCPAssistantServerCreateOrConnectWithoutAssistantInput.schema';
import { MCPAssistantServerCreateManyAssistantInputEnvelopeObjectSchema as MCPAssistantServerCreateManyAssistantInputEnvelopeObjectSchema } from './MCPAssistantServerCreateManyAssistantInputEnvelope.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerCreateWithoutAssistantInputObjectSchema).array(), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAssistantServerCreateManyAssistantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInput>;
export const MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInputObjectZodSchema = makeSchema();
