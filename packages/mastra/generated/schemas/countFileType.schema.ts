import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { FileTypeOrderByWithRelationInputObjectSchema as FileTypeOrderByWithRelationInputObjectSchema } from './objects/FileTypeOrderByWithRelationInput.schema';
import { FileTypeWhereInputObjectSchema as FileTypeWhereInputObjectSchema } from './objects/FileTypeWhereInput.schema';
import { FileTypeWhereUniqueInputObjectSchema as FileTypeWhereUniqueInputObjectSchema } from './objects/FileTypeWhereUniqueInput.schema';
import { FileTypeCountAggregateInputObjectSchema as FileTypeCountAggregateInputObjectSchema } from './objects/FileTypeCountAggregateInput.schema';

export const FileTypeCountSchema: z.ZodType<Prisma.FileTypeCountArgs> = z.object({ orderBy: z.union([FileTypeOrderByWithRelationInputObjectSchema, FileTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileTypeWhereInputObjectSchema.optional(), cursor: FileTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FileTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FileTypeCountArgs>;

export const FileTypeCountZodSchema = z.object({ orderBy: z.union([FileTypeOrderByWithRelationInputObjectSchema, FileTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileTypeWhereInputObjectSchema.optional(), cursor: FileTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FileTypeCountAggregateInputObjectSchema ]).optional() }).strict();