import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeSelectObjectSchema as FileTypeSelectObjectSchema } from './objects/FileTypeSelect.schema';
import { FileTypeCreateInputObjectSchema as FileTypeCreateInputObjectSchema } from './objects/FileTypeCreateInput.schema';
import { FileTypeUncheckedCreateInputObjectSchema as FileTypeUncheckedCreateInputObjectSchema } from './objects/FileTypeUncheckedCreateInput.schema';

export const FileTypeCreateOneSchema: z.ZodType<Prisma.FileTypeCreateArgs> = z.object({ select: FileTypeSelectObjectSchema.optional(),  data: z.union([FileTypeCreateInputObjectSchema, FileTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FileTypeCreateArgs>;

export const FileTypeCreateOneZodSchema = z.object({ select: FileTypeSelectObjectSchema.optional(),  data: z.union([FileTypeCreateInputObjectSchema, FileTypeUncheckedCreateInputObjectSchema]) }).strict();