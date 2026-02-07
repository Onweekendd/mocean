import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupFindManySchema as ModelGroupFindManySchema } from '../findManyModelGroup.schema';
import { AssistantFindManySchema as AssistantFindManySchema } from '../findManyAssistant.schema';
import { KnowledgeBaseFindManySchema as KnowledgeBaseFindManySchema } from '../findManyKnowledgeBase.schema';
import { AssistantSettingsFindManySchema as AssistantSettingsFindManySchema } from '../findManyAssistantSettings.schema';
import { TopicFindManySchema as TopicFindManySchema } from '../findManyTopic.schema';
import { ModelProviderFindManySchema as ModelProviderFindManySchema } from '../findManyModelProvider.schema';
import { ModelCountOutputTypeArgsObjectSchema as ModelCountOutputTypeArgsObjectSchema } from './ModelCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  owned_by: z.boolean().optional(),
  description: z.boolean().optional(),
  isSystem: z.boolean().optional(),
  contextLength: z.boolean().optional(),
  supportsAttachments: z.boolean().optional(),
  supportsTools: z.boolean().optional(),
  supportsReasoning: z.boolean().optional(),
  supportsImage: z.boolean().optional(),
  supportsAudio: z.boolean().optional(),
  supportsVideo: z.boolean().optional(),
  supportsEmbedding: z.boolean().optional(),
  inputPricePerMillion: z.boolean().optional(),
  outputPricePerMillion: z.boolean().optional(),
  modelGroups: z.union([z.boolean(), z.lazy(() => ModelGroupFindManySchema)]).optional(),
  assistants: z.union([z.boolean(), z.lazy(() => AssistantFindManySchema)]).optional(),
  defaultForAssistants: z.union([z.boolean(), z.lazy(() => AssistantFindManySchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => KnowledgeBaseFindManySchema)]).optional(),
  assistantSettings: z.union([z.boolean(), z.lazy(() => AssistantSettingsFindManySchema)]).optional(),
  rerankFor: z.union([z.boolean(), z.lazy(() => KnowledgeBaseFindManySchema)]).optional(),
  Topic: z.union([z.boolean(), z.lazy(() => TopicFindManySchema)]).optional(),
  providers: z.union([z.boolean(), z.lazy(() => ModelProviderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ModelSelectObjectSchema: z.ZodType<Prisma.ModelSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelSelect>;
export const ModelSelectObjectZodSchema = makeSchema();
