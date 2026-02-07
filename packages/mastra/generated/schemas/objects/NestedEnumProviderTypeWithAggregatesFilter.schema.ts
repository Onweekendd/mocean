import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProviderTypeFilterObjectSchema as NestedEnumProviderTypeFilterObjectSchema } from './NestedEnumProviderTypeFilter.schema'

const nestedenumprovidertypewithaggregatesfilterSchema = z.object({
  equals: ProviderTypeSchema.optional(),
  in: ProviderTypeSchema.array().optional(),
  notIn: ProviderTypeSchema.array().optional(),
  not: z.union([ProviderTypeSchema, z.lazy(() => NestedEnumProviderTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumProviderTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumProviderTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumProviderTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumProviderTypeWithAggregatesFilter> = nestedenumprovidertypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumProviderTypeWithAggregatesFilter>;
export const NestedEnumProviderTypeWithAggregatesFilterObjectZodSchema = nestedenumprovidertypewithaggregatesfilterSchema;
