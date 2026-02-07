import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional(),
  some: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional(),
  none: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional()
}).strict();
export const AssistantSettingsListRelationFilterObjectSchema: z.ZodType<Prisma.AssistantSettingsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsListRelationFilter>;
export const AssistantSettingsListRelationFilterObjectZodSchema = makeSchema();
