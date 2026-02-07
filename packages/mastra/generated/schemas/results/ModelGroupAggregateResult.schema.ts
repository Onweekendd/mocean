import * as z from 'zod';
export const ModelGroupAggregateResultSchema = z.object({  _count: z.object({
    model: z.number(),
    modelId: z.number(),
    group: z.number(),
    groupId: z.number(),
    provider: z.number(),
    providerId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    modelId: z.string().nullable(),
    groupId: z.string().nullable(),
    providerId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    modelId: z.string().nullable(),
    groupId: z.string().nullable(),
    providerId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});