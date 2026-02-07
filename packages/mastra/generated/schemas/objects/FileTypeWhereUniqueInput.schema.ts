import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const FileTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.FileTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeWhereUniqueInput>;
export const FileTypeWhereUniqueInputObjectZodSchema = makeSchema();
