import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
import { GroupUncheckedCreateNestedManyWithoutProviderInputObjectSchema as GroupUncheckedCreateNestedManyWithoutProviderInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutProviderInput.schema';
import { AssistantUncheckedCreateNestedManyWithoutProviderInputObjectSchema as AssistantUncheckedCreateNestedManyWithoutProviderInputObjectSchema } from './AssistantUncheckedCreateNestedManyWithoutProviderInput.schema';
import { ModelProviderUncheckedCreateNestedManyWithoutProviderInputObjectSchema as ModelProviderUncheckedCreateNestedManyWithoutProviderInputObjectSchema } from './ModelProviderUncheckedCreateNestedManyWithoutProviderInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: ProviderTypeSchema,
  name: z.string(),
  apiKey: z.string().optional(),
  apiHost: z.string().optional(),
  apiVersion: z.string().optional().nullable(),
  enabled: z.boolean().optional(),
  isSystem: z.boolean().optional(),
  isAuthed: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  isGateway: z.boolean().optional(),
  modelCount: z.number().int().optional().nullable(),
  docsUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutProviderInputObjectSchema).optional(),
  Assistant: z.lazy(() => AssistantUncheckedCreateNestedManyWithoutProviderInputObjectSchema).optional(),
  models: z.lazy(() => ModelProviderUncheckedCreateNestedManyWithoutProviderInputObjectSchema).optional()
}).strict();
export const ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ProviderUncheckedCreateWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUncheckedCreateWithoutModelGroupsInput>;
export const ProviderUncheckedCreateWithoutModelGroupsInputObjectZodSchema = makeSchema();
