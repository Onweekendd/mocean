import * as z from 'zod';

export const TopicKnowledgeBaseScalarFieldEnumSchema = z.enum(['topicId', 'knowledgeBaseId'])

export type TopicKnowledgeBaseScalarFieldEnum = z.infer<typeof TopicKnowledgeBaseScalarFieldEnumSchema>;