import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupCreateManyInputObjectSchema as ModelGroupCreateManyInputObjectSchema } from './objects/ModelGroupCreateManyInput.schema';

export const ModelGroupCreateManySchema: z.ZodType<Prisma.ModelGroupCreateManyArgs> = z.object({ data: z.union([ ModelGroupCreateManyInputObjectSchema, z.array(ModelGroupCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ModelGroupCreateManyArgs>;

export const ModelGroupCreateManyZodSchema = z.object({ data: z.union([ ModelGroupCreateManyInputObjectSchema, z.array(ModelGroupCreateManyInputObjectSchema) ]),  }).strict();