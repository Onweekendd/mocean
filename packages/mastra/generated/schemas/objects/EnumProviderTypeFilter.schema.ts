import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
import { NestedEnumProviderTypeFilterObjectSchema as NestedEnumProviderTypeFilterObjectSchema } from './NestedEnumProviderTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ProviderTypeSchema.optional(),
  in: ProviderTypeSchema.array().optional(),
  notIn: ProviderTypeSchema.array().optional(),
  not: z.union([ProviderTypeSchema, z.lazy(() => NestedEnumProviderTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumProviderTypeFilterObjectSchema: z.ZodType<Prisma.EnumProviderTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumProviderTypeFilter>;
export const EnumProviderTypeFilterObjectZodSchema = makeSchema();
