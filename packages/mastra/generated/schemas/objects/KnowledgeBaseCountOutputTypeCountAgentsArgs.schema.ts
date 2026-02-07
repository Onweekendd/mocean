import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseCountOutputTypeCountAgentsArgsObjectSchema = makeSchema();
export const KnowledgeBaseCountOutputTypeCountAgentsArgsObjectZodSchema = makeSchema();
