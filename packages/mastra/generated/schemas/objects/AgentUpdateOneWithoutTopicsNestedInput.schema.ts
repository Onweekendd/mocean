import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutTopicsInputObjectSchema as AgentCreateWithoutTopicsInputObjectSchema } from './AgentCreateWithoutTopicsInput.schema';
import { AgentUncheckedCreateWithoutTopicsInputObjectSchema as AgentUncheckedCreateWithoutTopicsInputObjectSchema } from './AgentUncheckedCreateWithoutTopicsInput.schema';
import { AgentCreateOrConnectWithoutTopicsInputObjectSchema as AgentCreateOrConnectWithoutTopicsInputObjectSchema } from './AgentCreateOrConnectWithoutTopicsInput.schema';
import { AgentUpsertWithoutTopicsInputObjectSchema as AgentUpsertWithoutTopicsInputObjectSchema } from './AgentUpsertWithoutTopicsInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentUpdateToOneWithWhereWithoutTopicsInputObjectSchema as AgentUpdateToOneWithWhereWithoutTopicsInputObjectSchema } from './AgentUpdateToOneWithWhereWithoutTopicsInput.schema';
import { AgentUpdateWithoutTopicsInputObjectSchema as AgentUpdateWithoutTopicsInputObjectSchema } from './AgentUpdateWithoutTopicsInput.schema';
import { AgentUncheckedUpdateWithoutTopicsInputObjectSchema as AgentUncheckedUpdateWithoutTopicsInputObjectSchema } from './AgentUncheckedUpdateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutTopicsInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutTopicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgentCreateOrConnectWithoutTopicsInputObjectSchema).optional(),
  upsert: z.lazy(() => AgentUpsertWithoutTopicsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AgentWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AgentWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AgentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgentUpdateToOneWithWhereWithoutTopicsInputObjectSchema), z.lazy(() => AgentUpdateWithoutTopicsInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutTopicsInputObjectSchema)]).optional()
}).strict();
export const AgentUpdateOneWithoutTopicsNestedInputObjectSchema: z.ZodType<Prisma.AgentUpdateOneWithoutTopicsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateOneWithoutTopicsNestedInput>;
export const AgentUpdateOneWithoutTopicsNestedInputObjectZodSchema = makeSchema();
