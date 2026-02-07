import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelCreateManyInputObjectSchema as ModelCreateManyInputObjectSchema } from './objects/ModelCreateManyInput.schema';

export const ModelCreateManySchema: z.ZodType<Prisma.ModelCreateManyArgs> = z.object({ data: z.union([ ModelCreateManyInputObjectSchema, z.array(ModelCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ModelCreateManyArgs>;

export const ModelCreateManyZodSchema = z.object({ data: z.union([ ModelCreateManyInputObjectSchema, z.array(ModelCreateManyInputObjectSchema) ]),  }).strict();