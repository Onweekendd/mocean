import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  mcpServerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedUpdateWithoutAssistantInput>;
export const MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectZodSchema = makeSchema();
