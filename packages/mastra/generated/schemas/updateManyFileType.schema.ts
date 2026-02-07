import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeUpdateManyMutationInputObjectSchema as FileTypeUpdateManyMutationInputObjectSchema } from './objects/FileTypeUpdateManyMutationInput.schema';
import { FileTypeWhereInputObjectSchema as FileTypeWhereInputObjectSchema } from './objects/FileTypeWhereInput.schema';

export const FileTypeUpdateManySchema: z.ZodType<Prisma.FileTypeUpdateManyArgs> = z.object({ data: FileTypeUpdateManyMutationInputObjectSchema, where: FileTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FileTypeUpdateManyArgs>;

export const FileTypeUpdateManyZodSchema = z.object({ data: FileTypeUpdateManyMutationInputObjectSchema, where: FileTypeWhereInputObjectSchema.optional() }).strict();