import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutTopicsInputObjectSchema as AgentCreateWithoutTopicsInputObjectSchema } from './AgentCreateWithoutTopicsInput.schema';
import { AgentUncheckedCreateWithoutTopicsInputObjectSchema as AgentUncheckedCreateWithoutTopicsInputObjectSchema } from './AgentUncheckedCreateWithoutTopicsInput.schema';
import { AgentCreateOrConnectWithoutTopicsInputObjectSchema as AgentCreateOrConnectWithoutTopicsInputObjectSchema } from './AgentCreateOrConnectWithoutTopicsInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutTopicsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutTopicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgentCreateOrConnectWithoutTopicsInputObjectSchema).optional(),
  connect: z.lazy(() => AgentWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgentCreateNestedOneWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AgentCreateNestedOneWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateNestedOneWithoutTopicsInput>;
export const AgentCreateNestedOneWithoutTopicsInputObjectZodSchema = makeSchema();
