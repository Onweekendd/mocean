import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { ModelGroupFindManySchema as ModelGroupFindManySchema } from '../findManyModelGroup.schema';
import { AssistantFindManySchema as AssistantFindManySchema } from '../findManyAssistant.schema';
import { ModelProviderFindManySchema as ModelProviderFindManySchema } from '../findManyModelProvider.schema';
import { ProviderCountOutputTypeArgsObjectSchema as ProviderCountOutputTypeArgsObjectSchema } from './ProviderCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  name: z.boolean().optional(),
  apiKey: z.boolean().optional(),
  apiHost: z.boolean().optional(),
  apiVersion: z.boolean().optional(),
  enabled: z.boolean().optional(),
  isSystem: z.boolean().optional(),
  isAuthed: z.boolean().optional(),
  notes: z.boolean().optional(),
  isGateway: z.boolean().optional(),
  modelCount: z.boolean().optional(),
  docsUrl: z.boolean().optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  modelGroups: z.union([z.boolean(), z.lazy(() => ModelGroupFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Assistant: z.union([z.boolean(), z.lazy(() => AssistantFindManySchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => ModelProviderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProviderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProviderSelectObjectSchema: z.ZodType<Prisma.ProviderSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProviderSelect>;
export const ProviderSelectObjectZodSchema = makeSchema();
