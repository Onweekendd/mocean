import * as z from 'zod';

export const QuickPhraseScalarFieldEnumSchema = z.enum(['id', 'title', 'content', 'order', 'createdAt', 'updatedAt'])

export type QuickPhraseScalarFieldEnum = z.infer<typeof QuickPhraseScalarFieldEnumSchema>;