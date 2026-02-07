import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereInputObjectSchema).optional()
}).strict();
export const ModelCountOutputTypeCountAssistantsArgsObjectSchema = makeSchema();
export const ModelCountOutputTypeCountAssistantsArgsObjectZodSchema = makeSchema();
