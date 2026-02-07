import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { ProviderArgsObjectSchema as ProviderArgsObjectSchema } from './ProviderArgs.schema'

const makeSchema = () => z.object({
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  modelId: z.boolean().optional(),
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional(),
  providerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ModelProviderSelectObjectSchema: z.ZodType<Prisma.ModelProviderSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderSelect>;
export const ModelProviderSelectObjectZodSchema = makeSchema();
