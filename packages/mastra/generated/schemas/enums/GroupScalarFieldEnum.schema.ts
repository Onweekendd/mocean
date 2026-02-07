import * as z from 'zod';

export const GroupScalarFieldEnumSchema = z.enum(['id', 'name', 'providerId', 'isDefault', 'createdAt', 'updatedAt'])

export type GroupScalarFieldEnum = z.infer<typeof GroupScalarFieldEnumSchema>;