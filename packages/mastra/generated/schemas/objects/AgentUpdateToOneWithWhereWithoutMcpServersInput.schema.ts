import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { AgentUpdateWithoutMcpServersInputObjectSchema as AgentUpdateWithoutMcpServersInputObjectSchema } from './AgentUpdateWithoutMcpServersInput.schema';
import { AgentUncheckedUpdateWithoutMcpServersInputObjectSchema as AgentUncheckedUpdateWithoutMcpServersInputObjectSchema } from './AgentUncheckedUpdateWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgentUpdateWithoutMcpServersInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutMcpServersInputObjectSchema)])
}).strict();
export const AgentUpdateToOneWithWhereWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AgentUpdateToOneWithWhereWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateToOneWithWhereWithoutMcpServersInput>;
export const AgentUpdateToOneWithWhereWithoutMcpServersInputObjectZodSchema = makeSchema();
