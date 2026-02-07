import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerScalarWhereInputObjectSchema as MCPAssistantServerScalarWhereInputObjectSchema } from './MCPAssistantServerScalarWhereInput.schema';
import { MCPAssistantServerUpdateManyMutationInputObjectSchema as MCPAssistantServerUpdateManyMutationInputObjectSchema } from './MCPAssistantServerUpdateManyMutationInput.schema';
import { MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema as MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema } from './MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MCPAssistantServerUpdateManyMutationInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema)])
}).strict();
export const MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInput>;
export const MCPAssistantServerUpdateManyWithWhereWithoutMcpServerInputObjectZodSchema = makeSchema();
