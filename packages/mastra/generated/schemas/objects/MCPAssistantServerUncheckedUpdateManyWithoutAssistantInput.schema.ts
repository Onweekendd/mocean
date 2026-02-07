import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  mcpServerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAssistantServerUncheckedUpdateManyWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyWithoutAssistantInput>;
export const MCPAssistantServerUncheckedUpdateManyWithoutAssistantInputObjectZodSchema = makeSchema();
