import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupSelectObjectSchema as GroupSelectObjectSchema } from './objects/GroupSelect.schema';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './objects/GroupInclude.schema';
import { GroupCreateInputObjectSchema as GroupCreateInputObjectSchema } from './objects/GroupCreateInput.schema';
import { GroupUncheckedCreateInputObjectSchema as GroupUncheckedCreateInputObjectSchema } from './objects/GroupUncheckedCreateInput.schema';

export const GroupCreateOneSchema: z.ZodType<Prisma.GroupCreateArgs> = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), data: z.union([GroupCreateInputObjectSchema, GroupUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GroupCreateArgs>;

export const GroupCreateOneZodSchema = z.object({ select: GroupSelectObjectSchema.optional(), include: GroupIncludeObjectSchema.optional(), data: z.union([GroupCreateInputObjectSchema, GroupUncheckedCreateInputObjectSchema]) }).strict();