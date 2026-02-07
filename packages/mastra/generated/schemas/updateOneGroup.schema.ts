import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupSelectObjectSchema as GroupSelectObjectSchema } from './objects/GroupSelect.schema';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './objects/GroupInclude.schema';
import { GroupUpdateInputObjectSchema as GroupUpdateInputObjectSchema } from './objects/GroupUpdateInput.schema';
import { GroupUncheckedUpdateInputObjectSchema as GroupUncheckedUpdateInputObjectSchema } from './objects/GroupUncheckedUpdateInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';

export const GroupUpdateOneSchema: z.ZodType<Prisma.GroupUpdateArgs> = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), data: z.union([GroupUpdateInputObjectSchema, GroupUncheckedUpdateInputObjectSchema]), where: GroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupUpdateArgs>;

export const GroupUpdateOneZodSchema = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), data: z.union([GroupUpdateInputObjectSchema, GroupUncheckedUpdateInputObjectSchema]), where: GroupWhereUniqueInputObjectSchema }).strict();