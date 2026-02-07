import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentUpdateWithoutTopicsInputObjectSchema as AgentUpdateWithoutTopicsInputObjectSchema } from './AgentUpdateWithoutTopicsInput.schema';
import { AgentUncheckedUpdateWithoutTopicsInputObjectSchema as AgentUncheckedUpdateWithoutTopicsInputObjectSchema } from './AgentUncheckedUpdateWithoutTopicsInput.schema';
import { AgentCreateWithoutTopicsInputObjectSchema as AgentCreateWithoutTopicsInputObjectSchema } from './AgentCreateWithoutTopicsInput.schema';
import { AgentUncheckedCreateWithoutTopicsInputObjectSchema as AgentUncheckedCreateWithoutTopicsInputObjectSchema } from './AgentUncheckedCreateWithoutTopicsInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgentUpdateWithoutTopicsInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutTopicsInputObjectSchema)]),
  create: z.union([z.lazy(() => AgentCreateWithoutTopicsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutTopicsInputObjectSchema)]),
  where: z.lazy(() => AgentWhereInputObjectSchema).optional()
}).strict();
export const AgentUpsertWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AgentUpsertWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpsertWithoutTopicsInput>;
export const AgentUpsertWithoutTopicsInputObjectZodSchema = makeSchema();
