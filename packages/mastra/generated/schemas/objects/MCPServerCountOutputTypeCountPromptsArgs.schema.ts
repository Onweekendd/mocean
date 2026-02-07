import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptWhereInputObjectSchema as MCPPromptWhereInputObjectSchema } from './MCPPromptWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPPromptWhereInputObjectSchema).optional()
}).strict();
export const MCPServerCountOutputTypeCountPromptsArgsObjectSchema = makeSchema();
export const MCPServerCountOutputTypeCountPromptsArgsObjectZodSchema = makeSchema();
