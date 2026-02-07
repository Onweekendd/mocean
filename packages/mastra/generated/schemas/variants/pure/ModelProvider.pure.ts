import * as z from 'zod';
// prettier-ignore
export const ModelProviderModelSchema = z.object({
    model: z.unknown(),
    modelId: z.string(),
    provider: z.unknown(),
    providerId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ModelProviderPureType = z.infer<typeof ModelProviderModelSchema>;
