import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
import { NestedEnumProviderTypeWithAggregatesFilterObjectSchema as NestedEnumProviderTypeWithAggregatesFilterObjectSchema } from './NestedEnumProviderTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProviderTypeFilterObjectSchema as NestedEnumProviderTypeFilterObjectSchema } from './NestedEnumProviderTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ProviderTypeSchema.optional(),
  in: ProviderTypeSchema.array().optional(),
  notIn: ProviderTypeSchema.array().optional(),
  not: z.union([ProviderTypeSchema, z.lazy(() => NestedEnumProviderTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumProviderTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumProviderTypeFilterObjectSchema).optional()
}).strict();
export const EnumProviderTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumProviderTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumProviderTypeWithAggregatesFilter>;
export const EnumProviderTypeWithAggregatesFilterObjectZodSchema = makeSchema();
