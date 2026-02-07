import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutMcpServersInputObjectSchema as AgentCreateWithoutMcpServersInputObjectSchema } from './AgentCreateWithoutMcpServersInput.schema';
import { AgentUncheckedCreateWithoutMcpServersInputObjectSchema as AgentUncheckedCreateWithoutMcpServersInputObjectSchema } from './AgentUncheckedCreateWithoutMcpServersInput.schema';
import { AgentCreateOrConnectWithoutMcpServersInputObjectSchema as AgentCreateOrConnectWithoutMcpServersInputObjectSchema } from './AgentCreateOrConnectWithoutMcpServersInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutMcpServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgentCreateOrConnectWithoutMcpServersInputObjectSchema).optional(),
  connect: z.lazy(() => AgentWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgentCreateNestedOneWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AgentCreateNestedOneWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateNestedOneWithoutMcpServersInput>;
export const AgentCreateNestedOneWithoutMcpServersInputObjectZodSchema = makeSchema();
