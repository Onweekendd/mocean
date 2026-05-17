import * as z from 'zod';

export const ProviderScalarFieldEnumSchema = z.enum(['id', 'type', 'name', 'apiKey', 'apiHost', 'apiVersion', 'enabled', 'isSystem', 'isAuthed', 'notes', 'iconType', 'isGateway', 'modelCount', 'docsUrl', 'createdAt', 'updatedAt'])

export type ProviderScalarFieldEnum = z.infer<typeof ProviderScalarFieldEnumSchema>;