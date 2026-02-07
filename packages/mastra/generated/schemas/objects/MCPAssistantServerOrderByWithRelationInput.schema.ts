import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AssistantOrderByWithRelationInputObjectSchema as AssistantOrderByWithRelationInputObjectSchema } from './AssistantOrderByWithRelationInput.schema';
import { MCPServerOrderByWithRelationInputObjectSchema as MCPServerOrderByWithRelationInputObjectSchema } from './MCPServerOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  assistantId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional(),
  assistant: z.lazy(() => AssistantOrderByWithRelationInputObjectSchema).optional(),
  mcpServer: z.lazy(() => MCPServerOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MCPAssistantServerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerOrderByWithRelationInput>;
export const MCPAssistantServerOrderByWithRelationInputObjectZodSchema = makeSchema();
