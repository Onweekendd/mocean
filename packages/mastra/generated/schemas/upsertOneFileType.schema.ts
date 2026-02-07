import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeSelectObjectSchema as FileTypeSelectObjectSchema } from './objects/FileTypeSelect.schema';
import { FileTypeWhereUniqueInputObjectSchema as FileTypeWhereUniqueInputObjectSchema } from './objects/FileTypeWhereUniqueInput.schema';
import { FileTypeCreateInputObjectSchema as FileTypeCreateInputObjectSchema } from './objects/FileTypeCreateInput.schema';
import { FileTypeUncheckedCreateInputObjectSchema as FileTypeUncheckedCreateInputObjectSchema } from './objects/FileTypeUncheckedCreateInput.schema';
import { FileTypeUpdateInputObjectSchema as FileTypeUpdateInputObjectSchema } from './objects/FileTypeUpdateInput.schema';
import { FileTypeUncheckedUpdateInputObjectSchema as FileTypeUncheckedUpdateInputObjectSchema } from './objects/FileTypeUncheckedUpdateInput.schema';

export const FileTypeUpsertOneSchema: z.ZodType<Prisma.FileTypeUpsertArgs> = z.object({ select: FileTypeSelectObjectSchema.optional(),  where: FileTypeWhereUniqueInputObjectSchema, create: z.union([ FileTypeCreateInputObjectSchema, FileTypeUncheckedCreateInputObjectSchema ]), update: z.union([ FileTypeUpdateInputObjectSchema, FileTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FileTypeUpsertArgs>;

export const FileTypeUpsertOneZodSchema = z.object({ select: FileTypeSelectObjectSchema.optional(),  where: FileTypeWhereUniqueInputObjectSchema, create: z.union([ FileTypeCreateInputObjectSchema, FileTypeUncheckedCreateInputObjectSchema ]), update: z.union([ FileTypeUpdateInputObjectSchema, FileTypeUncheckedUpdateInputObjectSchema ]) }).strict();