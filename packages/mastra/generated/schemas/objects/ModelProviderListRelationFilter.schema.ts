import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereInputObjectSchema as ModelProviderWhereInputObjectSchema } from './ModelProviderWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ModelProviderWhereInputObjectSchema).optional(),
  some: z.lazy(() => ModelProviderWhereInputObjectSchema).optional(),
  none: z.lazy(() => ModelProviderWhereInputObjectSchema).optional()
}).strict();
export const ModelProviderListRelationFilterObjectSchema: z.ZodType<Prisma.ModelProviderListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderListRelationFilter>;
export const ModelProviderListRelationFilterObjectZodSchema = makeSchema();
