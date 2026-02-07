import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantCreateManyInputObjectSchema as AssistantCreateManyInputObjectSchema } from './objects/AssistantCreateManyInput.schema';

export const AssistantCreateManySchema: z.ZodType<Prisma.AssistantCreateManyArgs> = z.object({ data: z.union([ AssistantCreateManyInputObjectSchema, z.array(AssistantCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.AssistantCreateManyArgs>;

export const AssistantCreateManyZodSchema = z.object({ data: z.union([ AssistantCreateManyInputObjectSchema, z.array(AssistantCreateManyInputObjectSchema) ]),  }).strict();