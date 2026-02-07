import * as z from 'zod';

export const ModelScalarFieldEnumSchema = z.enum(['id', 'name', 'owned_by', 'description', 'isSystem', 'contextLength', 'supportsAttachments', 'supportsTools', 'supportsReasoning', 'supportsImage', 'supportsAudio', 'supportsVideo', 'supportsEmbedding', 'inputPricePerMillion', 'outputPricePerMillion'])

export type ModelScalarFieldEnum = z.infer<typeof ModelScalarFieldEnumSchema>;