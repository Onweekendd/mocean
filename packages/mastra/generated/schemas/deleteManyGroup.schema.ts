import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';

export const GroupDeleteManySchema: z.ZodType<Prisma.GroupDeleteManyArgs> = z.object({ where: GroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupDeleteManyArgs>;

export const GroupDeleteManyZodSchema = z.object({ where: GroupWhereInputObjectSchema.optional() }).strict();