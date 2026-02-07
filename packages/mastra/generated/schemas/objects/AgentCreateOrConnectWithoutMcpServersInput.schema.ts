import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentCreateWithoutMcpServersInputObjectSchema as AgentCreateWithoutMcpServersInputObjectSchema } from './AgentCreateWithoutMcpServersInput.schema';
import { AgentUncheckedCreateWithoutMcpServersInputObjectSchema as AgentUncheckedCreateWithoutMcpServersInputObjectSchema } from './AgentUncheckedCreateWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgentCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutMcpServersInputObjectSchema)])
}).strict();
export const AgentCreateOrConnectWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AgentCreateOrConnectWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateOrConnectWithoutMcpServersInput>;
export const AgentCreateOrConnectWithoutMcpServersInputObjectZodSchema = makeSchema();
