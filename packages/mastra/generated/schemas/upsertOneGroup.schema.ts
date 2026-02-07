import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupSelectObjectSchema as GroupSelectObjectSchema } from './objects/GroupSelect.schema';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './objects/GroupInclude.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';
import { GroupCreateInputObjectSchema as GroupCreateInputObjectSchema } from './objects/GroupCreateInput.schema';
import { GroupUncheckedCreateInputObjectSchema as GroupUncheckedCreateInputObjectSchema } from './objects/GroupUncheckedCreateInput.schema';
import { GroupUpdateInputObjectSchema as GroupUpdateInputObjectSchema } from './objects/GroupUpdateInput.schema';
import { GroupUncheckedUpdateInputObjectSchema as GroupUncheckedUpdateInputObjectSchema } from './objects/GroupUncheckedUpdateInput.schema';

export const GroupUpsertOneSchema: z.ZodType<Prisma.GroupUpsertArgs> = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), where: GroupWhereUniqueInputObjectSchema, create: z.union([ GroupCreateInputObjectSchema, GroupUncheckedCreateInputObjectSchema ]), update: z.union([ GroupUpdateInputObjectSchema, GroupUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GroupUpsertArgs>;

export const GroupUpsertOneZodSchema = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), where: GroupWhereUniqueInputObjectSchema, create: z.union([ GroupCreateInputObjectSchema, GroupUncheckedCreateInputObjectSchema ]), update: z.union([ GroupUpdateInputObjectSchema, GroupUncheckedUpdateInputObjectSchema ]) }).strict();