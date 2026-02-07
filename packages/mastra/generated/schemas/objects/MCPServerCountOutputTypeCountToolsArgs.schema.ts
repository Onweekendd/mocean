import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './MCPToolWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPToolWhereInputObjectSchema).optional()
}).strict();
export const MCPServerCountOutputTypeCountToolsArgsObjectSchema = makeSchema();
export const MCPServerCountOutputTypeCountToolsArgsObjectZodSchema = makeSchema();
