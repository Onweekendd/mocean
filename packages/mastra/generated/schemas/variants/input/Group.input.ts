import * as z from 'zod';
// prettier-ignore
export const GroupInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    providerId: z.string(),
    isDefault: z.boolean(),
    provider: z.unknown(),
    models: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GroupInputType = z.infer<typeof GroupInputSchema>;
