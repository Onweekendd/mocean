import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  order: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const QuickPhraseOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.QuickPhraseOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseOrderByWithRelationInput>;
export const QuickPhraseOrderByWithRelationInputObjectZodSchema = makeSchema();
