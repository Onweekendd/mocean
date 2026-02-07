import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerSelectObjectSchema as MCPAssistantServerSelectObjectSchema } from './MCPAssistantServerSelect.schema';
import { MCPAssistantServerIncludeObjectSchema as MCPAssistantServerIncludeObjectSchema } from './MCPAssistantServerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPAssistantServerSelectObjectSchema).optional(),
  include: z.lazy(() => MCPAssistantServerIncludeObjectSchema).optional()
}).strict();
export const MCPAssistantServerArgsObjectSchema = makeSchema();
export const MCPAssistantServerArgsObjectZodSchema = makeSchema();
