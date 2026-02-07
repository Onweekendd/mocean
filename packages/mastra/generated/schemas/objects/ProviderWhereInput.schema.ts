import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumProviderTypeFilterObjectSchema as EnumProviderTypeFilterObjectSchema } from './EnumProviderTypeFilter.schema';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GroupListRelationFilterObjectSchema as GroupListRelationFilterObjectSchema } from './GroupListRelationFilter.schema';
import { ModelGroupListRelationFilterObjectSchema as ModelGroupListRelationFilterObjectSchema } from './ModelGroupListRelationFilter.schema';
import { AssistantListRelationFilterObjectSchema as AssistantListRelationFilterObjectSchema } from './AssistantListRelationFilter.schema';
import { ModelProviderListRelationFilterObjectSchema as ModelProviderListRelationFilterObjectSchema } from './ModelProviderListRelationFilter.schema'

const providerwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProviderWhereInputObjectSchema), z.lazy(() => ProviderWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProviderWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProviderWhereInputObjectSchema), z.lazy(() => ProviderWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumProviderTypeFilterObjectSchema), ProviderTypeSchema]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apiKey: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apiHost: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apiVersion: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isSystem: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isAuthed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isGateway: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  modelCount: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  docsUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  groups: z.lazy(() => GroupListRelationFilterObjectSchema).optional(),
  modelGroups: z.lazy(() => ModelGroupListRelationFilterObjectSchema).optional(),
  Assistant: z.lazy(() => AssistantListRelationFilterObjectSchema).optional(),
  models: z.lazy(() => ModelProviderListRelationFilterObjectSchema).optional()
}).strict();
export const ProviderWhereInputObjectSchema: z.ZodType<Prisma.ProviderWhereInput> = providerwhereinputSchema as unknown as z.ZodType<Prisma.ProviderWhereInput>;
export const ProviderWhereInputObjectZodSchema = providerwhereinputSchema;
