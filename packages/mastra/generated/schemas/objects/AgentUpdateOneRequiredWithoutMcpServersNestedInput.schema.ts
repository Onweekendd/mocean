import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutMcpServersInputObjectSchema as AgentCreateWithoutMcpServersInputObjectSchema } from './AgentCreateWithoutMcpServersInput.schema';
import { AgentUncheckedCreateWithoutMcpServersInputObjectSchema as AgentUncheckedCreateWithoutMcpServersInputObjectSchema } from './AgentUncheckedCreateWithoutMcpServersInput.schema';
import { AgentCreateOrConnectWithoutMcpServersInputObjectSchema as AgentCreateOrConnectWithoutMcpServersInputObjectSchema } from './AgentCreateOrConnectWithoutMcpServersInput.schema';
import { AgentUpsertWithoutMcpServersInputObjectSchema as AgentUpsertWithoutMcpServersInputObjectSchema } from './AgentUpsertWithoutMcpServersInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentUpdateToOneWithWhereWithoutMcpServersInputObjectSchema as AgentUpdateToOneWithWhereWithoutMcpServersInputObjectSchema } from './AgentUpdateToOneWithWhereWithoutMcpServersInput.schema';
import { AgentUpdateWithoutMcpServersInputObjectSchema as AgentUpdateWithoutMcpServersInputObjectSchema } from './AgentUpdateWithoutMcpServersInput.schema';
import { AgentUncheckedUpdateWithoutMcpServersInputObjectSchema as AgentUncheckedUpdateWithoutMcpServersInputObjectSchema } from './AgentUncheckedUpdateWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutMcpServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgentCreateOrConnectWithoutMcpServersInputObjectSchema).optional(),
  upsert: z.lazy(() => AgentUpsertWithoutMcpServersInputObjectSchema).optional(),
  connect: z.lazy(() => AgentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgentUpdateToOneWithWhereWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUpdateWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutMcpServersInputObjectSchema)]).optional()
}).strict();
export const AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema: z.ZodType<Prisma.AgentUpdateOneRequiredWithoutMcpServersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateOneRequiredWithoutMcpServersNestedInput>;
export const AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectZodSchema = makeSchema();
