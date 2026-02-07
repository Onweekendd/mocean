import * as z from 'zod';
export const QuickPhraseAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    content: z.number(),
    order: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    order: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    order: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});