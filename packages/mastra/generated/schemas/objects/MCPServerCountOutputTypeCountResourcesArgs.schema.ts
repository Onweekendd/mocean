import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceWhereInputObjectSchema as MCPResourceWhereInputObjectSchema } from './MCPResourceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPResourceWhereInputObjectSchema).optional()
}).strict();
export const MCPServerCountOutputTypeCountResourcesArgsObjectSchema = makeSchema();
export const MCPServerCountOutputTypeCountResourcesArgsObjectZodSchema = makeSchema();
