import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AssistantWhereInputObjectSchema).optional(),
  some: z.lazy(() => AssistantWhereInputObjectSchema).optional(),
  none: z.lazy(() => AssistantWhereInputObjectSchema).optional()
}).strict();
export const AssistantListRelationFilterObjectSchema: z.ZodType<Prisma.AssistantListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AssistantListRelationFilter>;
export const AssistantListRelationFilterObjectZodSchema = makeSchema();
