import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicCreateManyInputObjectSchema as TopicCreateManyInputObjectSchema } from './objects/TopicCreateManyInput.schema';

export const TopicCreateManySchema: z.ZodType<Prisma.TopicCreateManyArgs> = z.object({ data: z.union([ TopicCreateManyInputObjectSchema, z.array(TopicCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.TopicCreateManyArgs>;

export const TopicCreateManyZodSchema = z.object({ data: z.union([ TopicCreateManyInputObjectSchema, z.array(TopicCreateManyInputObjectSchema) ]),  }).strict();