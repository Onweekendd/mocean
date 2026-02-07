import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  agentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mcpServerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAgentServerUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedUpdateInput>;
export const MCPAgentServerUncheckedUpdateInputObjectZodSchema = makeSchema();
