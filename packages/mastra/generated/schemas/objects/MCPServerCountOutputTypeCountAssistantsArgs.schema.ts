import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereInputObjectSchema as MCPAssistantServerWhereInputObjectSchema } from './MCPAssistantServerWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerCountOutputTypeCountAssistantsArgsObjectSchema = makeSchema();
export const MCPServerCountOutputTypeCountAssistantsArgsObjectZodSchema = makeSchema();
