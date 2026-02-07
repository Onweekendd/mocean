import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  mcpServerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAgentServerUncheckedUpdateManyWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedUpdateManyWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedUpdateManyWithoutAgentInput>;
export const MCPAgentServerUncheckedUpdateManyWithoutAgentInputObjectZodSchema = makeSchema();
