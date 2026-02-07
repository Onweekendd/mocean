import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
import { GroupCreateNestedManyWithoutProviderInputObjectSchema as GroupCreateNestedManyWithoutProviderInputObjectSchema } from './GroupCreateNestedManyWithoutProviderInput.schema';
import { ModelGroupCreateNestedManyWithoutProviderInputObjectSchema as ModelGroupCreateNestedManyWithoutProviderInputObjectSchema } from './ModelGroupCreateNestedManyWithoutProviderInput.schema';
import { ModelProviderCreateNestedManyWithoutProviderInputObjectSchema as ModelProviderCreateNestedManyWithoutProviderInputObjectSchema } from './ModelProviderCreateNestedManyWithoutProviderInput.schema'

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
  groups: z.lazy(() => GroupCreateNestedManyWithoutProviderInputObjectSchema).optional(),
  modelGroups: z.lazy(() => ModelGroupCreateNestedManyWithoutProviderInputObjectSchema).optional(),
  models: z.lazy(() => ModelProviderCreateNestedManyWithoutProviderInputObjectSchema).optional()
}).strict();
export const ProviderCreateWithoutAssistantInputObjectSchema: z.ZodType<Prisma.ProviderCreateWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateWithoutAssistantInput>;
export const ProviderCreateWithoutAssistantInputObjectZodSchema = makeSchema();
