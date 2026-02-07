import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseWhereInputObjectSchema as TopicKnowledgeBaseWhereInputObjectSchema } from './objects/TopicKnowledgeBaseWhereInput.schema';

export const TopicKnowledgeBaseDeleteManySchema: z.ZodType<Prisma.TopicKnowledgeBaseDeleteManyArgs> = z.object({ where: TopicKnowledgeBaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseDeleteManyArgs>;

export const TopicKnowledgeBaseDeleteManyZodSchema = z.object({ where: TopicKnowledgeBaseWhereInputObjectSchema.optional() }).strict();