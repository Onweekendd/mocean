import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentUpdateWithoutMcpServersInputObjectSchema as AgentUpdateWithoutMcpServersInputObjectSchema } from './AgentUpdateWithoutMcpServersInput.schema';
import { AgentUncheckedUpdateWithoutMcpServersInputObjectSchema as AgentUncheckedUpdateWithoutMcpServersInputObjectSchema } from './AgentUncheckedUpdateWithoutMcpServersInput.schema';
import { AgentCreateWithoutMcpServersInputObjectSchema as AgentCreateWithoutMcpServersInputObjectSchema } from './AgentCreateWithoutMcpServersInput.schema';
import { AgentUncheckedCreateWithoutMcpServersInputObjectSchema as AgentUncheckedCreateWithoutMcpServersInputObjectSchema } from './AgentUncheckedCreateWithoutMcpServersInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgentUpdateWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutMcpServersInputObjectSchema)]),
  create: z.union([z.lazy(() => AgentCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutMcpServersInputObjectSchema)]),
  where: z.lazy(() => AgentWhereInputObjectSchema).optional()
}).strict();
export const AgentUpsertWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AgentUpsertWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpsertWithoutMcpServersInput>;
export const AgentUpsertWithoutMcpServersInputObjectZodSchema = makeSchema();
