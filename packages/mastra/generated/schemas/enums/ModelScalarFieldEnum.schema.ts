import * as z from 'zod';

export const ModelScalarFieldEnumSchema = z.enum(['id', 'name', 'owned_by', 'description', 'isSystem', 'sort', 'contextLength', 'supportsAttachments', 'supportsTools', 'supportsReasoning', 'supportsImage', 'supportsAudio', 'supportsVideo', 'supportsEmbedding', 'inputPricePerMillion', 'outputPricePerMillion', 'groupId', 'createdAt', 'updatedAt'])

export type ModelScalarFieldEnum = z.infer<typeof ModelScalarFieldEnumSchema>;