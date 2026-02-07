import * as z from 'zod';

export const TopicScalarFieldEnumSchema = z.enum(['id', 'name', 'prompt', 'pinned', 'isNameManuallyEdited', 'assistantId', 'agentId', 'modelId', 'createdAt', 'updatedAt'])

export type TopicScalarFieldEnum = z.infer<typeof TopicScalarFieldEnumSchema>;