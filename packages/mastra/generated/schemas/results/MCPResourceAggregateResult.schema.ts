import * as z from 'zod';
export const MCPResourceAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    uri: z.number(),
    name: z.number(),
    description: z.number(),
    mimeType: z.number(),
    size: z.number(),
    text: z.number(),
    blob: z.number(),
    server: z.number(),
    serverId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    uri: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    mimeType: z.string().nullable(),
    size: z.number().int().nullable(),
    text: z.string().nullable(),
    blob: z.string().nullable(),
    serverId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    uri: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    mimeType: z.string().nullable(),
    size: z.number().int().nullable(),
    text: z.string().nullable(),
    blob: z.string().nullable(),
    serverId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});