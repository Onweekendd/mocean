import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentCreateWithoutSettingsInputObjectSchema as AgentCreateWithoutSettingsInputObjectSchema } from './AgentCreateWithoutSettingsInput.schema';
import { AgentUncheckedCreateWithoutSettingsInputObjectSchema as AgentUncheckedCreateWithoutSettingsInputObjectSchema } from './AgentUncheckedCreateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgentCreateWithoutSettingsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutSettingsInputObjectSchema)])
}).strict();
export const AgentCreateOrConnectWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AgentCreateOrConnectWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateOrConnectWithoutSettingsInput>;
export const AgentCreateOrConnectWithoutSettingsInputObjectZodSchema = makeSchema();
