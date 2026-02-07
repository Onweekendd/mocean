import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPServerOrderByWithRelationInputObjectSchema as MCPServerOrderByWithRelationInputObjectSchema } from './MCPServerOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  arguments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  server: z.lazy(() => MCPServerOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MCPPromptOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MCPPromptOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptOrderByWithRelationInput>;
export const MCPPromptOrderByWithRelationInputObjectZodSchema = makeSchema();
