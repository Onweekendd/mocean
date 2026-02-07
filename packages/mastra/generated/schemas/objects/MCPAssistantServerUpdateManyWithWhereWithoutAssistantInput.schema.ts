import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerScalarWhereInputObjectSchema as MCPAssistantServerScalarWhereInputObjectSchema } from './MCPAssistantServerScalarWhereInput.schema';
import { MCPAssistantServerUpdateManyMutationInputObjectSchema as MCPAssistantServerUpdateManyMutationInputObjectSchema } from './MCPAssistantServerUpdateManyMutationInput.schema';
import { MCPAssistantServerUncheckedUpdateManyWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedUpdateManyWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedUpdateManyWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MCPAssistantServerUpdateManyMutationInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedUpdateManyWithoutAssistantInputObjectSchema)])
}).strict();
export const MCPAssistantServerUpdateManyWithWhereWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateManyWithWhereWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateManyWithWhereWithoutAssistantInput>;
export const MCPAssistantServerUpdateManyWithWhereWithoutAssistantInputObjectZodSchema = makeSchema();
