import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseCreateManyInputObjectSchema as TopicKnowledgeBaseCreateManyInputObjectSchema } from './objects/TopicKnowledgeBaseCreateManyInput.schema';

export const TopicKnowledgeBaseCreateManySchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateManyArgs> = z.object({ data: z.union([ TopicKnowledgeBaseCreateManyInputObjectSchema, z.array(TopicKnowledgeBaseCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateManyArgs>;

export const TopicKnowledgeBaseCreateManyZodSchema = z.object({ data: z.union([ TopicKnowledgeBaseCreateManyInputObjectSchema, z.array(TopicKnowledgeBaseCreateManyInputObjectSchema) ]),  }).strict();