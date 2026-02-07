import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  name: z.literal(true).optional(),
  apiKey: z.literal(true).optional(),
  apiHost: z.literal(true).optional(),
  apiVersion: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  isSystem: z.literal(true).optional(),
  isAuthed: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  isGateway: z.literal(true).optional(),
  modelCount: z.literal(true).optional(),
  docsUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProviderMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProviderMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProviderMaxAggregateInputType>;
export const ProviderMaxAggregateInputObjectZodSchema = makeSchema();
