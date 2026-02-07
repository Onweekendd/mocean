import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeOrderByWithRelationInputObjectSchema as FileTypeOrderByWithRelationInputObjectSchema } from './objects/FileTypeOrderByWithRelationInput.schema';
import { FileTypeWhereInputObjectSchema as FileTypeWhereInputObjectSchema } from './objects/FileTypeWhereInput.schema';
import { FileTypeWhereUniqueInputObjectSchema as FileTypeWhereUniqueInputObjectSchema } from './objects/FileTypeWhereUniqueInput.schema';
import { FileTypeScalarFieldEnumSchema } from './enums/FileTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FileTypeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.FileTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    origin_name: z.boolean().optional(),
    path: z.boolean().optional(),
    size: z.boolean().optional(),
    ext: z.boolean().optional(),
    type: z.boolean().optional(),
    count: z.boolean().optional(),
    tokens: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FileTypeSelect>;

export const FileTypeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    origin_name: z.boolean().optional(),
    path: z.boolean().optional(),
    size: z.boolean().optional(),
    ext: z.boolean().optional(),
    type: z.boolean().optional(),
    count: z.boolean().optional(),
    tokens: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const FileTypeFindFirstOrThrowSchema: z.ZodType<Prisma.FileTypeFindFirstOrThrowArgs> = z.object({ select: FileTypeFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([FileTypeOrderByWithRelationInputObjectSchema, FileTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileTypeWhereInputObjectSchema.optional(), cursor: FileTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileTypeScalarFieldEnumSchema, FileTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FileTypeFindFirstOrThrowArgs>;

export const FileTypeFindFirstOrThrowZodSchema = z.object({ select: FileTypeFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([FileTypeOrderByWithRelationInputObjectSchema, FileTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileTypeWhereInputObjectSchema.optional(), cursor: FileTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileTypeScalarFieldEnumSchema, FileTypeScalarFieldEnumSchema.array()]).optional() }).strict();