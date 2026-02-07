import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutSettingsInputObjectSchema as AgentCreateWithoutSettingsInputObjectSchema } from './AgentCreateWithoutSettingsInput.schema';
import { AgentUncheckedCreateWithoutSettingsInputObjectSchema as AgentUncheckedCreateWithoutSettingsInputObjectSchema } from './AgentUncheckedCreateWithoutSettingsInput.schema';
import { AgentCreateOrConnectWithoutSettingsInputObjectSchema as AgentCreateOrConnectWithoutSettingsInputObjectSchema } from './AgentCreateOrConnectWithoutSettingsInput.schema';
import { AgentUpsertWithoutSettingsInputObjectSchema as AgentUpsertWithoutSettingsInputObjectSchema } from './AgentUpsertWithoutSettingsInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentUpdateToOneWithWhereWithoutSettingsInputObjectSchema as AgentUpdateToOneWithWhereWithoutSettingsInputObjectSchema } from './AgentUpdateToOneWithWhereWithoutSettingsInput.schema';
import { AgentUpdateWithoutSettingsInputObjectSchema as AgentUpdateWithoutSettingsInputObjectSchema } from './AgentUpdateWithoutSettingsInput.schema';
import { AgentUncheckedUpdateWithoutSettingsInputObjectSchema as AgentUncheckedUpdateWithoutSettingsInputObjectSchema } from './AgentUncheckedUpdateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutSettingsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgentCreateOrConnectWithoutSettingsInputObjectSchema).optional(),
  upsert: z.lazy(() => AgentUpsertWithoutSettingsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AgentWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AgentWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AgentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgentUpdateToOneWithWhereWithoutSettingsInputObjectSchema), z.lazy(() => AgentUpdateWithoutSettingsInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutSettingsInputObjectSchema)]).optional()
}).strict();
export const AgentUpdateOneWithoutSettingsNestedInputObjectSchema: z.ZodType<Prisma.AgentUpdateOneWithoutSettingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateOneWithoutSettingsNestedInput>;
export const AgentUpdateOneWithoutSettingsNestedInputObjectZodSchema = makeSchema();
