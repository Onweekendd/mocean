import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional()
}).strict();
export const ModelCountOutputTypeCountAssistantSettingsArgsObjectSchema = makeSchema();
export const ModelCountOutputTypeCountAssistantSettingsArgsObjectZodSchema = makeSchema();
