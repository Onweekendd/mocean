import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderCreateManyInputObjectSchema as ProviderCreateManyInputObjectSchema } from './objects/ProviderCreateManyInput.schema';

export const ProviderCreateManySchema: z.ZodType<Prisma.ProviderCreateManyArgs> = z.object({ data: z.union([ ProviderCreateManyInputObjectSchema, z.array(ProviderCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ProviderCreateManyArgs>;

export const ProviderCreateManyZodSchema = z.object({ data: z.union([ ProviderCreateManyInputObjectSchema, z.array(ProviderCreateManyInputObjectSchema) ]),  }).strict();