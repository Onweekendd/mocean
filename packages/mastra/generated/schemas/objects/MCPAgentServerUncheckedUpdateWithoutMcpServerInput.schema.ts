import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  agentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedUpdateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedUpdateWithoutMcpServerInput>;
export const MCPAgentServerUncheckedUpdateWithoutMcpServerInputObjectZodSchema = makeSchema();
