import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereInputObjectSchema).optional()
}).strict();
export const ProviderCountOutputTypeCountGroupsArgsObjectSchema = makeSchema();
export const ProviderCountOutputTypeCountGroupsArgsObjectZodSchema = makeSchema();
