import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderCreateManyInputObjectSchema as ModelProviderCreateManyInputObjectSchema } from './objects/ModelProviderCreateManyInput.schema';

export const ModelProviderCreateManySchema: z.ZodType<Prisma.ModelProviderCreateManyArgs> = z.object({ data: z.union([ ModelProviderCreateManyInputObjectSchema, z.array(ModelProviderCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ModelProviderCreateManyArgs>;

export const ModelProviderCreateManyZodSchema = z.object({ data: z.union([ ModelProviderCreateManyInputObjectSchema, z.array(ModelProviderCreateManyInputObjectSchema) ]),  }).strict();