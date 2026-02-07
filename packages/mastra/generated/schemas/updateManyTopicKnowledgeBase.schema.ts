import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseUpdateManyMutationInputObjectSchema as TopicKnowledgeBaseUpdateManyMutationInputObjectSchema } from './objects/TopicKnowledgeBaseUpdateManyMutationInput.schema';
import { TopicKnowledgeBaseWhereInputObjectSchema as TopicKnowledgeBaseWhereInputObjectSchema } from './objects/TopicKnowledgeBaseWhereInput.schema';

export const TopicKnowledgeBaseUpdateManySchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyArgs> = z.object({ data: TopicKnowledgeBaseUpdateManyMutationInputObjectSchema, where: TopicKnowledgeBaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyArgs>;

export const TopicKnowledgeBaseUpdateManyZodSchema = z.object({ data: TopicKnowledgeBaseUpdateManyMutationInputObjectSchema, where: TopicKnowledgeBaseWhereInputObjectSchema.optional() }).strict();