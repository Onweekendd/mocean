import * as z from 'zod';
export const KnowledgeItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    uniqueId: z.number(),
    uniqueIdsJson: z.number(),
    type: z.number(),
    content: z.number(),
    remark: z.number(),
    processingStatus: z.number(),
    processingProgress: z.number(),
    processingError: z.number(),
    retryCount: z.number(),
    knowledgeBase: z.number(),
    baseId: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _sum: z.object({
    processingProgress: z.number().nullable(),
    retryCount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    processingProgress: z.number().nullable(),
    retryCount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    uniqueId: z.string().nullable(),
    type: z.string().nullable(),
    remark: z.string().nullable(),
    processingStatus: z.string().nullable(),
    processingProgress: z.number().nullable(),
    processingError: z.string().nullable(),
    retryCount: z.number().int().nullable(),
    baseId: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    uniqueId: z.string().nullable(),
    type: z.string().nullable(),
    remark: z.string().nullable(),
    processingStatus: z.string().nullable(),
    processingProgress: z.number().nullable(),
    processingError: z.string().nullable(),
    retryCount: z.number().int().nullable(),
    baseId: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});