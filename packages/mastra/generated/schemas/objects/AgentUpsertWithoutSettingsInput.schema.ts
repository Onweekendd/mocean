import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentUpdateWithoutSettingsInputObjectSchema as AgentUpdateWithoutSettingsInputObjectSchema } from './AgentUpdateWithoutSettingsInput.schema';
import { AgentUncheckedUpdateWithoutSettingsInputObjectSchema as AgentUncheckedUpdateWithoutSettingsInputObjectSchema } from './AgentUncheckedUpdateWithoutSettingsInput.schema';
import { AgentCreateWithoutSettingsInputObjectSchema as AgentCreateWithoutSettingsInputObjectSchema } from './AgentCreateWithoutSettingsInput.schema';
import { AgentUncheckedCreateWithoutSettingsInputObjectSchema as AgentUncheckedCreateWithoutSettingsInputObjectSchema } from './AgentUncheckedCreateWithoutSettingsInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgentUpdateWithoutSettingsInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutSettingsInputObjectSchema)]),
  create: z.union([z.lazy(() => AgentCreateWithoutSettingsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutSettingsInputObjectSchema)]),
  where: z.lazy(() => AgentWhereInputObjectSchema).optional()
}).strict();
export const AgentUpsertWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AgentUpsertWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpsertWithoutSettingsInput>;
export const AgentUpsertWithoutSettingsInputObjectZodSchema = makeSchema();
