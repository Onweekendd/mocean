import * as z from 'zod';

export const KnowledgeItemScalarFieldEnumSchema = z.enum(['id', 'uniqueId', 'uniqueIdsJson', 'type', 'content', 'remark', 'processingStatus', 'processingProgress', 'processingError', 'retryCount', 'baseId', 'created_at', 'updated_at'])

export type KnowledgeItemScalarFieldEnum = z.infer<typeof KnowledgeItemScalarFieldEnumSchema>;