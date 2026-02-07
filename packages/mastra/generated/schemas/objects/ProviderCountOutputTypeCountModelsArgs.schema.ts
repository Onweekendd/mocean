import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereInputObjectSchema as ModelProviderWhereInputObjectSchema } from './ModelProviderWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderWhereInputObjectSchema).optional()
}).strict();
export const ProviderCountOutputTypeCountModelsArgsObjectSchema = makeSchema();
export const ProviderCountOutputTypeCountModelsArgsObjectZodSchema = makeSchema();
