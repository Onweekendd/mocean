import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  assistantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInput>;
export const MCPAssistantServerUncheckedUpdateManyWithoutMcpServerInputObjectZodSchema = makeSchema();
