import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeSelectObjectSchema as FileTypeSelectObjectSchema } from './objects/FileTypeSelect.schema';
import { FileTypeWhereUniqueInputObjectSchema as FileTypeWhereUniqueInputObjectSchema } from './objects/FileTypeWhereUniqueInput.schema';

export const FileTypeDeleteOneSchema: z.ZodType<Prisma.FileTypeDeleteArgs> = z.object({ select: FileTypeSelectObjectSchema.optional(),  where: FileTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileTypeDeleteArgs>;

export const FileTypeDeleteOneZodSchema = z.object({ select: FileTypeSelectObjectSchema.optional(),  where: FileTypeWhereUniqueInputObjectSchema }).strict();