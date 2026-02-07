import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const TopicKnowledgeBaseUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyMutationInput>;
export const TopicKnowledgeBaseUpdateManyMutationInputObjectZodSchema = makeSchema();
