import * as z from 'zod';
// prettier-ignore
export const FileTypeModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    origin_name: z.string(),
    path: z.string(),
    size: z.number().int(),
    ext: z.string(),
    type: z.string(),
    count: z.number().int(),
    tokens: z.number().int().nullable(),
    created_at: z.date()
}).strict();

export type FileTypePureType = z.infer<typeof FileTypeModelSchema>;
