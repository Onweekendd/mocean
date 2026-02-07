import * as z from 'zod';

export const ModelProviderScalarFieldEnumSchema = z.enum(['modelId', 'providerId', 'createdAt', 'updatedAt'])

export type ModelProviderScalarFieldEnum = z.infer<typeof ModelProviderScalarFieldEnumSchema>;