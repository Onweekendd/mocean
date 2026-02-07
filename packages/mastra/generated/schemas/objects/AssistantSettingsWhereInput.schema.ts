import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { AssistantNullableScalarRelationFilterObjectSchema as AssistantNullableScalarRelationFilterObjectSchema } from './AssistantNullableScalarRelationFilter.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { AgentNullableScalarRelationFilterObjectSchema as AgentNullableScalarRelationFilterObjectSchema } from './AgentNullableScalarRelationFilter.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { ModelNullableScalarRelationFilterObjectSchema as ModelNullableScalarRelationFilterObjectSchema } from './ModelNullableScalarRelationFilter.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const assistantsettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AssistantSettingsWhereInputObjectSchema), z.lazy(() => AssistantSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AssistantSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AssistantSettingsWhereInputObjectSchema), z.lazy(() => AssistantSettingsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  contextCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  temperature: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  topP: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  maxTokens: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  enableMaxTokens: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  streamOutput: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  hideMessages: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  customParameters: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  reasoning_effort: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  qwenThinkMode: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  toolUseMode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  assistantId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  agentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  defaultModelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  assistant: z.union([z.lazy(() => AssistantNullableScalarRelationFilterObjectSchema), z.lazy(() => AssistantWhereInputObjectSchema)]).optional(),
  agent: z.union([z.lazy(() => AgentNullableScalarRelationFilterObjectSchema), z.lazy(() => AgentWhereInputObjectSchema)]).optional(),
  defaultModel: z.union([z.lazy(() => ModelNullableScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional()
}).strict();
export const AssistantSettingsWhereInputObjectSchema: z.ZodType<Prisma.AssistantSettingsWhereInput> = assistantsettingswhereinputSchema as unknown as z.ZodType<Prisma.AssistantSettingsWhereInput>;
export const AssistantSettingsWhereInputObjectZodSchema = assistantsettingswhereinputSchema;
