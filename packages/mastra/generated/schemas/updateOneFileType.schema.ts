import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeSelectObjectSchema as FileTypeSelectObjectSchema } from './objects/FileTypeSelect.schema';
import { FileTypeUpdateInputObjectSchema as FileTypeUpdateInputObjectSchema } from './objects/FileTypeUpdateInput.schema';
import { FileTypeUncheckedUpdateInputObjectSchema as FileTypeUncheckedUpdateInputObjectSchema } from './objects/FileTypeUncheckedUpdateInput.schema';
import { FileTypeWhereUniqueInputObjectSchema as FileTypeWhereUniqueInputObjectSchema } from './objects/FileTypeWhereUniqueInput.schema';

export const FileTypeUpdateOneSchema: z.ZodType<Prisma.FileTypeUpdateArgs> = z.object({ select: FileTypeSelectObjectSchema.optional(),  data: z.union([FileTypeUpdateInputObjectSchema, FileTypeUncheckedUpdateInputObjectSchema]), where: FileTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileTypeUpdateArgs>;

export const FileTypeUpdateOneZodSchema = z.object({ select: FileTypeSelectObjectSchema.optional(),  data: z.union([FileTypeUpdateInputObjectSchema, FileTypeUncheckedUpdateInputObjectSchema]), where: FileTypeWhereUniqueInputObjectSchema }).strict();