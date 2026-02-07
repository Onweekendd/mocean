import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  assistantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mcpServerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAssistantServerUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateManyInput>;
export const MCPAssistantServerUncheckedUpdateManyInputObjectZodSchema = makeSchema();
