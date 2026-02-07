import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutSettingsInputObjectSchema as AgentCreateWithoutSettingsInputObjectSchema } from './AgentCreateWithoutSettingsInput.schema';
import { AgentUncheckedCreateWithoutSettingsInputObjectSchema as AgentUncheckedCreateWithoutSettingsInputObjectSchema } from './AgentUncheckedCreateWithoutSettingsInput.schema';
import { AgentCreateOrConnectWithoutSettingsInputObjectSchema as AgentCreateOrConnectWithoutSettingsInputObjectSchema } from './AgentCreateOrConnectWithoutSettingsInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutSettingsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgentCreateOrConnectWithoutSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => AgentWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgentCreateNestedOneWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AgentCreateNestedOneWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateNestedOneWithoutSettingsInput>;
export const AgentCreateNestedOneWithoutSettingsInputObjectZodSchema = makeSchema();
