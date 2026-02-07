import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  origin_name: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  ext: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  count: SortOrderSchema.optional(),
  tokens: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const FileTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FileTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeOrderByWithRelationInput>;
export const FileTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
