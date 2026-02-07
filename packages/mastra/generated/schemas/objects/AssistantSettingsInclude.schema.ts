import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantArgsObjectSchema as AssistantArgsObjectSchema } from './AssistantArgs.schema';
import { AgentArgsObjectSchema as AgentArgsObjectSchema } from './AgentArgs.schema';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema'

const makeSchema = () => z.object({
  assistant: z.union([z.boolean(), z.lazy(() => AssistantArgsObjectSchema)]).optional(),
  agent: z.union([z.boolean(), z.lazy(() => AgentArgsObjectSchema)]).optional(),
  defaultModel: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional()
}).strict();
export const AssistantSettingsIncludeObjectSchema: z.ZodType<Prisma.AssistantSettingsInclude> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsInclude>;
export const AssistantSettingsIncludeObjectZodSchema = makeSchema();
