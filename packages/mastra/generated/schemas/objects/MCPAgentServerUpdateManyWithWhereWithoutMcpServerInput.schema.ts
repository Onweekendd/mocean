import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerScalarWhereInputObjectSchema as MCPAgentServerScalarWhereInputObjectSchema } from './MCPAgentServerScalarWhereInput.schema';
import { MCPAgentServerUpdateManyMutationInputObjectSchema as MCPAgentServerUpdateManyMutationInputObjectSchema } from './MCPAgentServerUpdateManyMutationInput.schema';
import { MCPAgentServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema as MCPAgentServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema } from './MCPAgentServerUncheckedUpdateManyWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MCPAgentServerUpdateManyMutationInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAgentServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateManyWithWhereWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateManyWithWhereWithoutMcpServerInput>;
export const MCPAgentServerUpdateManyWithWhereWithoutMcpServerInputObjectZodSchema = makeSchema();
