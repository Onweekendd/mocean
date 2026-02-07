import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { ModelGroupOrderByRelationAggregateInputObjectSchema as ModelGroupOrderByRelationAggregateInputObjectSchema } from './ModelGroupOrderByRelationAggregateInput.schema';
import { AssistantOrderByRelationAggregateInputObjectSchema as AssistantOrderByRelationAggregateInputObjectSchema } from './AssistantOrderByRelationAggregateInput.schema';
import { ModelProviderOrderByRelationAggregateInputObjectSchema as ModelProviderOrderByRelationAggregateInputObjectSchema } from './ModelProviderOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  apiKey: SortOrderSchema.optional(),
  apiHost: SortOrderSchema.optional(),
  apiVersion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enabled: SortOrderSchema.optional(),
  isSystem: SortOrderSchema.optional(),
  isAuthed: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isGateway: SortOrderSchema.optional(),
  modelCount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  docsUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  modelGroups: z.lazy(() => ModelGroupOrderByRelationAggregateInputObjectSchema).optional(),
  Assistant: z.lazy(() => AssistantOrderByRelationAggregateInputObjectSchema).optional(),
  models: z.lazy(() => ModelProviderOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProviderOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProviderOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderOrderByWithRelationInput>;
export const ProviderOrderByWithRelationInputObjectZodSchema = makeSchema();
