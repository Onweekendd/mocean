import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentCreateWithoutTopicsInputObjectSchema as AgentCreateWithoutTopicsInputObjectSchema } from './AgentCreateWithoutTopicsInput.schema';
import { AgentUncheckedCreateWithoutTopicsInputObjectSchema as AgentUncheckedCreateWithoutTopicsInputObjectSchema } from './AgentUncheckedCreateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgentCreateWithoutTopicsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutTopicsInputObjectSchema)])
}).strict();
export const AgentCreateOrConnectWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AgentCreateOrConnectWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateOrConnectWithoutTopicsInput>;
export const AgentCreateOrConnectWithoutTopicsInputObjectZodSchema = makeSchema();
