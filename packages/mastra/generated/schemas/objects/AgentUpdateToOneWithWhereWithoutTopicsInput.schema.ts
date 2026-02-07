import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { AgentUpdateWithoutTopicsInputObjectSchema as AgentUpdateWithoutTopicsInputObjectSchema } from './AgentUpdateWithoutTopicsInput.schema';
import { AgentUncheckedUpdateWithoutTopicsInputObjectSchema as AgentUncheckedUpdateWithoutTopicsInputObjectSchema } from './AgentUncheckedUpdateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgentUpdateWithoutTopicsInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutTopicsInputObjectSchema)])
}).strict();
export const AgentUpdateToOneWithWhereWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AgentUpdateToOneWithWhereWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateToOneWithWhereWithoutTopicsInput>;
export const AgentUpdateToOneWithWhereWithoutTopicsInputObjectZodSchema = makeSchema();
