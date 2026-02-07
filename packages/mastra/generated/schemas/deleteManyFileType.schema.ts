import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeWhereInputObjectSchema as FileTypeWhereInputObjectSchema } from './objects/FileTypeWhereInput.schema';

export const FileTypeDeleteManySchema: z.ZodType<Prisma.FileTypeDeleteManyArgs> = z.object({ where: FileTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FileTypeDeleteManyArgs>;

export const FileTypeDeleteManyZodSchema = z.object({ where: FileTypeWhereInputObjectSchema.optional() }).strict();