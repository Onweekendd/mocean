import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPServerOrderByWithRelationInputObjectSchema as MCPServerOrderByWithRelationInputObjectSchema } from './MCPServerOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  command: SortOrderSchema.optional(),
  argsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  env: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serverId: SortOrderSchema.optional(),
  server: z.lazy(() => MCPServerOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MCPConfigSampleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleOrderByWithRelationInput>;
export const MCPConfigSampleOrderByWithRelationInputObjectZodSchema = makeSchema();
