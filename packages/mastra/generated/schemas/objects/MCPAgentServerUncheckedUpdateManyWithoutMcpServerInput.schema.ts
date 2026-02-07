import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  agentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAgentServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedUpdateManyWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedUpdateManyWithoutMcpServerInput>;
export const MCPAgentServerUncheckedUpdateManyWithoutMcpServerInputObjectZodSchema = makeSchema();
