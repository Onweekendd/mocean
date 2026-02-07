import * as z from 'zod';

export const KnowledgeBaseScalarFieldEnumSchema = z.enum(['id', 'name', 'dimensions', 'description', 'documentCount', 'chunkSize', 'chunkOverlap', 'threshold', 'version', 'modelId', 'rerankModelId', 'created_at', 'updated_at'])

export type KnowledgeBaseScalarFieldEnum = z.infer<typeof KnowledgeBaseScalarFieldEnumSchema>;