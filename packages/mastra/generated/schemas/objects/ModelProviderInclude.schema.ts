import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { ProviderArgsObjectSchema as ProviderArgsObjectSchema } from './ProviderArgs.schema'

const makeSchema = () => z.object({
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional()
}).strict();
export const ModelProviderIncludeObjectSchema: z.ZodType<Prisma.ModelProviderInclude> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderInclude>;
export const ModelProviderIncludeObjectZodSchema = makeSchema();
