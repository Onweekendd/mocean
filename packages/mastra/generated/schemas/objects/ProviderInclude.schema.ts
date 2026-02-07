import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { ModelGroupFindManySchema as ModelGroupFindManySchema } from '../findManyModelGroup.schema';
import { AssistantFindManySchema as AssistantFindManySchema } from '../findManyAssistant.schema';
import { ModelProviderFindManySchema as ModelProviderFindManySchema } from '../findManyModelProvider.schema';
import { ProviderCountOutputTypeArgsObjectSchema as ProviderCountOutputTypeArgsObjectSchema } from './ProviderCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  modelGroups: z.union([z.boolean(), z.lazy(() => ModelGroupFindManySchema)]).optional(),
  Assistant: z.union([z.boolean(), z.lazy(() => AssistantFindManySchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => ModelProviderFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProviderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProviderIncludeObjectSchema: z.ZodType<Prisma.ProviderInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProviderInclude>;
export const ProviderIncludeObjectZodSchema = makeSchema();
