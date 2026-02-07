import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupSelectObjectSchema as GroupSelectObjectSchema } from './objects/GroupSelect.schema';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './objects/GroupInclude.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';

export const GroupDeleteOneSchema: z.ZodType<Prisma.GroupDeleteArgs> = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), where: GroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupDeleteArgs>;

export const GroupDeleteOneZodSchema = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), where: GroupWhereUniqueInputObjectSchema }).strict();