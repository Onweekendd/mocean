import * as z from 'zod';

export const AssistantScalarFieldEnumSchema = z.enum(['id', 'name', 'prompt', 'type', 'emoji', 'description', 'enableWebSearch', 'webSearchProviderId', 'enableGenerateImage', 'knowledgeRecognition', 'modelId', 'providerId', 'defaultModelId', 'createdAt', 'updatedAt'])

export type AssistantScalarFieldEnum = z.infer<typeof AssistantScalarFieldEnumSchema>;