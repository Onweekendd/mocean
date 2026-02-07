import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeSelectObjectSchema as FileTypeSelectObjectSchema } from './objects/FileTypeSelect.schema';
import { FileTypeWhereUniqueInputObjectSchema as FileTypeWhereUniqueInputObjectSchema } from './objects/FileTypeWhereUniqueInput.schema';

export const FileTypeFindUniqueSchema: z.ZodType<Prisma.FileTypeFindUniqueArgs> = z.object({ select: FileTypeSelectObjectSchema.optional(),  where: FileTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileTypeFindUniqueArgs>;

export const FileTypeFindUniqueZodSchema = z.object({ select: FileTypeSelectObjectSchema.optional(),  where: FileTypeWhereUniqueInputObjectSchema }).strict();