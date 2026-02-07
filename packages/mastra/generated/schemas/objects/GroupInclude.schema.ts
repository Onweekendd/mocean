import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderArgsObjectSchema as ProviderArgsObjectSchema } from './ProviderArgs.schema';
import { ModelGroupFindManySchema as ModelGroupFindManySchema } from '../findManyModelGroup.schema';
import { GroupCountOutputTypeArgsObjectSchema as GroupCountOutputTypeArgsObjectSchema } from './GroupCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => ModelGroupFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GroupIncludeObjectSchema: z.ZodType<Prisma.GroupInclude> = makeSchema() as unknown as z.ZodType<Prisma.GroupInclude>;
export const GroupIncludeObjectZodSchema = makeSchema();
