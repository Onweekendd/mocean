import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeCreateManyInputObjectSchema as FileTypeCreateManyInputObjectSchema } from './objects/FileTypeCreateManyInput.schema';

export const FileTypeCreateManySchema: z.ZodType<Prisma.FileTypeCreateManyArgs> = z.object({ data: z.union([ FileTypeCreateManyInputObjectSchema, z.array(FileTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.FileTypeCreateManyArgs>;

export const FileTypeCreateManyZodSchema = z.object({ data: z.union([ FileTypeCreateManyInputObjectSchema, z.array(FileTypeCreateManyInputObjectSchema) ]),  }).strict();