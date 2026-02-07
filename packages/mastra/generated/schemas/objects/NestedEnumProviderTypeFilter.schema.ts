import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderTypeSchema } from '../enums/ProviderType.schema'

const nestedenumprovidertypefilterSchema = z.object({
  equals: ProviderTypeSchema.optional(),
  in: ProviderTypeSchema.array().optional(),
  notIn: ProviderTypeSchema.array().optional(),
  not: z.union([ProviderTypeSchema, z.lazy(() => NestedEnumProviderTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumProviderTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumProviderTypeFilter> = nestedenumprovidertypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumProviderTypeFilter>;
export const NestedEnumProviderTypeFilterObjectZodSchema = nestedenumprovidertypefilterSchema;
