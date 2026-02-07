import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderArgsObjectSchema as ProviderArgsObjectSchema } from './ProviderArgs.schema';
import { ModelGroupFindManySchema as ModelGroupFindManySchema } from '../findManyModelGroup.schema';
import { GroupCountOutputTypeArgsObjectSchema as GroupCountOutputTypeArgsObjectSchema } from './GroupCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  providerId: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional(),
  models: z.union([z.boolean(), z.lazy(() => ModelGroupFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GroupSelectObjectSchema: z.ZodType<Prisma.GroupSelect> = makeSchema() as unknown as z.ZodType<Prisma.GroupSelect>;
export const GroupSelectObjectZodSchema = makeSchema();
