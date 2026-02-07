import * as z from 'zod';

export const ModelGroupScalarFieldEnumSchema = z.enum(['modelId', 'groupId', 'providerId', 'createdAt', 'updatedAt'])

export type ModelGroupScalarFieldEnum = z.infer<typeof ModelGroupScalarFieldEnumSchema>;