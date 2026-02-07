import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional().nullable()
}).strict();
export const AssistantSettingsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AssistantSettingsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsNullableScalarRelationFilter>;
export const AssistantSettingsNullableScalarRelationFilterObjectZodSchema = makeSchema();
