import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereInputObjectSchema as ModelGroupWhereInputObjectSchema } from './ModelGroupWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereInputObjectSchema).optional()
}).strict();
export const ModelCountOutputTypeCountModelGroupsArgsObjectSchema = makeSchema();
export const ModelCountOutputTypeCountModelGroupsArgsObjectZodSchema = makeSchema();
