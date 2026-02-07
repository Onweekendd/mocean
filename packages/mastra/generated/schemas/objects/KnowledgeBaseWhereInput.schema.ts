import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AssistantListRelationFilterObjectSchema as AssistantListRelationFilterObjectSchema } from './AssistantListRelationFilter.schema';
import { AgentListRelationFilterObjectSchema as AgentListRelationFilterObjectSchema } from './AgentListRelationFilter.schema';
import { ModelScalarRelationFilterObjectSchema as ModelScalarRelationFilterObjectSchema } from './ModelScalarRelationFilter.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelNullableScalarRelationFilterObjectSchema as ModelNullableScalarRelationFilterObjectSchema } from './ModelNullableScalarRelationFilter.schema';
import { KnowledgeItemListRelationFilterObjectSchema as KnowledgeItemListRelationFilterObjectSchema } from './KnowledgeItemListRelationFilter.schema';
import { TopicKnowledgeBaseListRelationFilterObjectSchema as TopicKnowledgeBaseListRelationFilterObjectSchema } from './TopicKnowledgeBaseListRelationFilter.schema'

const knowledgebasewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => KnowledgeBaseWhereInputObjectSchema), z.lazy(() => KnowledgeBaseWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => KnowledgeBaseWhereInputObjectSchema), z.lazy(() => KnowledgeBaseWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dimensions: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  documentCount: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  chunkSize: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  chunkOverlap: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  threshold: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  modelId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rerankModelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  assistants: z.lazy(() => AssistantListRelationFilterObjectSchema).optional(),
  agents: z.lazy(() => AgentListRelationFilterObjectSchema).optional(),
  model: z.union([z.lazy(() => ModelScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  rerankModel: z.union([z.lazy(() => ModelNullableScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => KnowledgeItemListRelationFilterObjectSchema).optional(),
  topics: z.lazy(() => TopicKnowledgeBaseListRelationFilterObjectSchema).optional()
}).strict();
export const KnowledgeBaseWhereInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseWhereInput> = knowledgebasewhereinputSchema as unknown as z.ZodType<Prisma.KnowledgeBaseWhereInput>;
export const KnowledgeBaseWhereInputObjectZodSchema = knowledgebasewhereinputSchema;
