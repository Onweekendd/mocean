import * as z from 'zod';

export const FileTypeScalarFieldEnumSchema = z.enum(['id', 'name', 'origin_name', 'path', 'size', 'ext', 'type', 'count', 'tokens', 'created_at'])

export type FileTypeScalarFieldEnum = z.infer<typeof FileTypeScalarFieldEnumSchema>;