import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupCreateManyInputObjectSchema as GroupCreateManyInputObjectSchema } from './objects/GroupCreateManyInput.schema';

export const GroupCreateManySchema: z.ZodType<Prisma.GroupCreateManyArgs> = z.object({ data: z.union([ GroupCreateManyInputObjectSchema, z.array(GroupCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.GroupCreateManyArgs>;

export const GroupCreateManyZodSchema = z.object({ data: z.union([ GroupCreateManyInputObjectSchema, z.array(GroupCreateManyInputObjectSchema) ]),  }).strict();