import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { AgentUpdateWithoutSettingsInputObjectSchema as AgentUpdateWithoutSettingsInputObjectSchema } from './AgentUpdateWithoutSettingsInput.schema';
import { AgentUncheckedUpdateWithoutSettingsInputObjectSchema as AgentUncheckedUpdateWithoutSettingsInputObjectSchema } from './AgentUncheckedUpdateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgentUpdateWithoutSettingsInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutSettingsInputObjectSchema)])
}).strict();
export const AgentUpdateToOneWithWhereWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AgentUpdateToOneWithWhereWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateToOneWithWhereWithoutSettingsInput>;
export const AgentUpdateToOneWithWhereWithoutSettingsInputObjectZodSchema = makeSchema();
