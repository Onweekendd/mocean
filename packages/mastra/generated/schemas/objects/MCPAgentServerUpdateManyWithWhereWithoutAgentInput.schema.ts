import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerScalarWhereInputObjectSchema as MCPAgentServerScalarWhereInputObjectSchema } from './MCPAgentServerScalarWhereInput.schema';
import { MCPAgentServerUpdateManyMutationInputObjectSchema as MCPAgentServerUpdateManyMutationInputObjectSchema } from './MCPAgentServerUpdateManyMutationInput.schema';
import { MCPAgentServerUncheckedUpdateManyWithoutAgentInputObjectSchema as MCPAgentServerUncheckedUpdateManyWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedUpdateManyWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MCPAgentServerUpdateManyMutationInputObjectSchema), z.lazy(() => MCPAgentServerUncheckedUpdateManyWithoutAgentInputObjectSchema)])
}).strict();
export const MCPAgentServerUpdateManyWithWhereWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateManyWithWhereWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateManyWithWhereWithoutAgentInput>;
export const MCPAgentServerUpdateManyWithWhereWithoutAgentInputObjectZodSchema = makeSchema();
