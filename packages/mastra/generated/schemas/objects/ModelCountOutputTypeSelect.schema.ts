import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCountOutputTypeCountModelGroupsArgsObjectSchema as ModelCountOutputTypeCountModelGroupsArgsObjectSchema } from './ModelCountOutputTypeCountModelGroupsArgs.schema';
import { ModelCountOutputTypeCountAssistantsArgsObjectSchema as ModelCountOutputTypeCountAssistantsArgsObjectSchema } from './ModelCountOutputTypeCountAssistantsArgs.schema';
import { ModelCountOutputTypeCountDefaultForAssistantsArgsObjectSchema as ModelCountOutputTypeCountDefaultForAssistantsArgsObjectSchema } from './ModelCountOutputTypeCountDefaultForAssistantsArgs.schema';
import { ModelCountOutputTypeCountKnowledgeBasesArgsObjectSchema as ModelCountOutputTypeCountKnowledgeBasesArgsObjectSchema } from './ModelCountOutputTypeCountKnowledgeBasesArgs.schema';
import { ModelCountOutputTypeCountAssistantSettingsArgsObjectSchema as ModelCountOutputTypeCountAssistantSettingsArgsObjectSchema } from './ModelCountOutputTypeCountAssistantSettingsArgs.schema';
import { ModelCountOutputTypeCountRerankForArgsObjectSchema as ModelCountOutputTypeCountRerankForArgsObjectSchema } from './ModelCountOutputTypeCountRerankForArgs.schema';
import { ModelCountOutputTypeCountTopicArgsObjectSchema as ModelCountOutputTypeCountTopicArgsObjectSchema } from './ModelCountOutputTypeCountTopicArgs.schema';
import { ModelCountOutputTypeCountProvidersArgsObjectSchema as ModelCountOutputTypeCountProvidersArgsObjectSchema } from './ModelCountOutputTypeCountProvidersArgs.schema'

const makeSchema = () => z.object({
  modelGroups: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountModelGroupsArgsObjectSchema)]).optional(),
  assistants: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountAssistantsArgsObjectSchema)]).optional(),
  defaultForAssistants: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountDefaultForAssistantsArgsObjectSchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountKnowledgeBasesArgsObjectSchema)]).optional(),
  assistantSettings: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountAssistantSettingsArgsObjectSchema)]).optional(),
  rerankFor: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountRerankForArgsObjectSchema)]).optional(),
  Topic: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountTopicArgsObjectSchema)]).optional(),
  providers: z.union([z.boolean(), z.lazy(() => ModelCountOutputTypeCountProvidersArgsObjectSchema)]).optional()
}).strict();
export const ModelCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ModelCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelCountOutputTypeSelect>;
export const ModelCountOutputTypeSelectObjectZodSchema = makeSchema();
