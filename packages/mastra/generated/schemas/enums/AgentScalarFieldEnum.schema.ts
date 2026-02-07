import * as z from 'zod';

export const AgentScalarFieldEnumSchema = z.enum(['id', 'name', 'prompt', 'type', 'emoji', 'description', 'groupJson', 'enableWebSearch', 'webSearchProviderId', 'enableGenerateImage', 'knowledgeRecognition', 'createdAt', 'updatedAt'])

export type AgentScalarFieldEnum = z.infer<typeof AgentScalarFieldEnumSchema>;