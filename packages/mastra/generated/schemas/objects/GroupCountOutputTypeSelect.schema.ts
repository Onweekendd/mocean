import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCountOutputTypeCountModelsArgsObjectSchema as GroupCountOutputTypeCountModelsArgsObjectSchema } from './GroupCountOutputTypeCountModelsArgs.schema'

const makeSchema = () => z.object({
  models: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeCountModelsArgsObjectSchema)]).optional()
}).strict();
export const GroupCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GroupCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GroupCountOutputTypeSelect>;
export const GroupCountOutputTypeSelectObjectZodSchema = makeSchema();
