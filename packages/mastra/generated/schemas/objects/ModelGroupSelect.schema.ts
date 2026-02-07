import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { GroupArgsObjectSchema as GroupArgsObjectSchema } from './GroupArgs.schema';
import { ProviderArgsObjectSchema as ProviderArgsObjectSchema } from './ProviderArgs.schema'

const makeSchema = () => z.object({
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  modelId: z.boolean().optional(),
  group: z.union([z.boolean(), z.lazy(() => GroupArgsObjectSchema)]).optional(),
  groupId: z.boolean().optional(),
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional(),
  providerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ModelGroupSelectObjectSchema: z.ZodType<Prisma.ModelGroupSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupSelect>;
export const ModelGroupSelectObjectZodSchema = makeSchema();
