import * as z from 'zod';
// prettier-ignore
export const ModelGroupModelSchema = z.object({
    model: z.unknown(),
    modelId: z.string(),
    group: z.unknown(),
    groupId: z.string(),
    provider: z.unknown(),
    providerId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ModelGroupPureType = z.infer<typeof ModelGroupModelSchema>;
