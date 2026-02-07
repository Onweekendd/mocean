import * as z from 'zod';
import { ProviderTypeSchema } from '../../enums/ProviderType.schema';
// prettier-ignore
export const ProviderResultSchema = z.object({
    id: z.string(),
    type: ProviderTypeSchema,
    name: z.string(),
    apiKey: z.string(),
    apiHost: z.string(),
    apiVersion: z.string().nullable(),
    enabled: z.boolean(),
    isSystem: z.boolean(),
    isAuthed: z.boolean(),
    notes: z.string().nullable(),
    isGateway: z.boolean(),
    modelCount: z.number().int().nullable(),
    docsUrl: z.string().nullable(),
    groups: z.array(z.unknown()),
    modelGroups: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    Assistant: z.array(z.unknown()),
    models: z.array(z.unknown())
}).strict();

export type ProviderResultType = z.infer<typeof ProviderResultSchema>;
