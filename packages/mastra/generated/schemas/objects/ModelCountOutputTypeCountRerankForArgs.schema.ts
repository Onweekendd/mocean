import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional()
}).strict();
export const ModelCountOutputTypeCountRerankForArgsObjectSchema = makeSchema();
export const ModelCountOutputTypeCountRerankForArgsObjectZodSchema = makeSchema();
