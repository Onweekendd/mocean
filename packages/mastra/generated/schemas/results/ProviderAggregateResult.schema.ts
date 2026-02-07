import * as z from 'zod';
export const ProviderAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    type: z.number(),
    name: z.number(),
    apiKey: z.number(),
    apiHost: z.number(),
    apiVersion: z.number(),
    enabled: z.number(),
    isSystem: z.number(),
    isAuthed: z.number(),
    notes: z.number(),
    isGateway: z.number(),
    modelCount: z.number(),
    docsUrl: z.number(),
    groups: z.number(),
    modelGroups: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    Assistant: z.number(),
    models: z.number()
  }).optional(),
  _sum: z.object({
    modelCount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    modelCount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    apiKey: z.string().nullable(),
    apiHost: z.string().nullable(),
    apiVersion: z.string().nullable(),
    notes: z.string().nullable(),
    modelCount: z.number().int().nullable(),
    docsUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    apiKey: z.string().nullable(),
    apiHost: z.string().nullable(),
    apiVersion: z.string().nullable(),
    notes: z.string().nullable(),
    modelCount: z.number().int().nullable(),
    docsUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});