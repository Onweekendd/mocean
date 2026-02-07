import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemWhereInputObjectSchema as KnowledgeItemWhereInputObjectSchema } from './KnowledgeItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeItemWhereInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseCountOutputTypeCountItemsArgsObjectSchema = makeSchema();
export const KnowledgeBaseCountOutputTypeCountItemsArgsObjectZodSchema = makeSchema();
