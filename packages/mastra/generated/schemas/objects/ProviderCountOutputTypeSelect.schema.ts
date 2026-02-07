import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCountOutputTypeCountGroupsArgsObjectSchema as ProviderCountOutputTypeCountGroupsArgsObjectSchema } from './ProviderCountOutputTypeCountGroupsArgs.schema';
import { ProviderCountOutputTypeCountModelGroupsArgsObjectSchema as ProviderCountOutputTypeCountModelGroupsArgsObjectSchema } from './ProviderCountOutputTypeCountModelGroupsArgs.schema';
import { ProviderCountOutputTypeCountAssistantArgsObjectSchema as ProviderCountOutputTypeCountAssistantArgsObjectSchema } from './ProviderCountOutputTypeCountAssistantArgs.schema';
import { ProviderCountOutputTypeCountModelsArgsObjectSchema as ProviderCountOutputTypeCountModelsArgsObjectSchema } from './ProviderCountOutputTypeCountModelsArgs.schema'

const makeSchema = () => z.object({
  groups: z.union([z.boolean(), z.lazy(() => ProviderCountOutputTypeCountGroupsArgsObjectSchema)]).optional(),
  modelGroups: z.union([z.boolean(), z.lazy(() => ProviderCountOutputTypeCountModelGroupsArgsObjectSchema)]).optional(),
  Assistant: z.union([z.boolean(), z.lazy(() => ProviderCountOutputTypeCountAssistantArgsObjectSchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => ProviderCountOutputTypeCountModelsArgsObjectSchema)]).optional()
}).strict();
export const ProviderCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProviderCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCountOutputTypeSelect>;
export const ProviderCountOutputTypeSelectObjectZodSchema = makeSchema();
