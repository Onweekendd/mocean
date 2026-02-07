import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './objects/GroupUpdateManyMutationInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';

export const GroupUpdateManySchema: z.ZodType<Prisma.GroupUpdateManyArgs> = z.object({ data: GroupUpdateManyMutationInputObjectSchema, where: GroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupUpdateManyArgs>;

export const GroupUpdateManyZodSchema = z.object({ data: GroupUpdateManyMutationInputObjectSchema, where: GroupWhereInputObjectSchema.optional() }).strict();