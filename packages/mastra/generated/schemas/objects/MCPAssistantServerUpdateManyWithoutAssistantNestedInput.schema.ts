import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerCreateWithoutAssistantInputObjectSchema as MCPAssistantServerCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerCreateWithoutAssistantInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutAssistantInput.schema';
import { MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema as MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema } from './MCPAssistantServerCreateOrConnectWithoutAssistantInput.schema';
import { MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInputObjectSchema as MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInputObjectSchema } from './MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInput.schema';
import { MCPAssistantServerCreateManyAssistantInputEnvelopeObjectSchema as MCPAssistantServerCreateManyAssistantInputEnvelopeObjectSchema } from './MCPAssistantServerCreateManyAssistantInputEnvelope.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInputObjectSchema as MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInputObjectSchema } from './MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInput.schema';
import { MCPAssistantServerUpdateManyWithWhereWithoutAssistantInputObjectSchema as MCPAssistantServerUpdateManyWithWhereWithoutAssistantInputObjectSchema } from './MCPAssistantServerUpdateManyWithWhereWithoutAssistantInput.schema';
import { MCPAssistantServerScalarWhereInputObjectSchema as MCPAssistantServerScalarWhereInputObjectSchema } from './MCPAssistantServerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerCreateWithoutAssistantInputObjectSchema).array(), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerCreateOrConnectWithoutAssistantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MCPAssistantServerCreateManyAssistantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema), z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MCPAssistantServerUpdateManyWithWhereWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUpdateManyWithWhereWithoutAssistantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema), z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MCPAssistantServerUpdateManyWithoutAssistantNestedInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateManyWithoutAssistantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateManyWithoutAssistantNestedInput>;
export const MCPAssistantServerUpdateManyWithoutAssistantNestedInputObjectZodSchema = makeSchema();
