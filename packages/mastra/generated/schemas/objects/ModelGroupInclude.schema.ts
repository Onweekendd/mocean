import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { GroupArgsObjectSchema as GroupArgsObjectSchema } from './GroupArgs.schema';
import { ProviderArgsObjectSchema as ProviderArgsObjectSchema } from './ProviderArgs.schema'

const makeSchema = () => z.object({
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  group: z.union([z.boolean(), z.lazy(() => GroupArgsObjectSchema)]).optional(),
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional()
}).strict();
export const ModelGroupIncludeObjectSchema: z.ZodType<Prisma.ModelGroupInclude> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupInclude>;
export const ModelGroupIncludeObjectZodSchema = makeSchema();
