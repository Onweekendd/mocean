import * as z from 'zod';
// prettier-ignore
export const ModelProviderInputSchema = z.object({
    model: z.unknown(),
    modelId: z.string(),
    provider: z.unknown(),
    providerId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ModelProviderInputType = z.infer<typeof ModelProviderInputSchema>;
