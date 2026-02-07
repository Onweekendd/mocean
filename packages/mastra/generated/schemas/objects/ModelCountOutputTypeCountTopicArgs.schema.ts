import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './TopicWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereInputObjectSchema).optional()
}).strict();
export const ModelCountOutputTypeCountTopicArgsObjectSchema = makeSchema();
export const ModelCountOutputTypeCountTopicArgsObjectZodSchema = makeSchema();
