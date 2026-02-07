import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  assistantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateWithoutMcpServerInput>;
export const MCPAssistantServerUncheckedUpdateWithoutMcpServerInputObjectZodSchema = makeSchema();
