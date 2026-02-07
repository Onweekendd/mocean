import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsSelectObjectSchema as AssistantSettingsSelectObjectSchema } from './AssistantSettingsSelect.schema';
import { AssistantSettingsIncludeObjectSchema as AssistantSettingsIncludeObjectSchema } from './AssistantSettingsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AssistantSettingsSelectObjectSchema).optional(),
  include: z.lazy(() => AssistantSettingsIncludeObjectSchema).optional()
}).strict();
export const AssistantSettingsArgsObjectSchema = makeSchema();
export const AssistantSettingsArgsObjectZodSchema = makeSchema();
