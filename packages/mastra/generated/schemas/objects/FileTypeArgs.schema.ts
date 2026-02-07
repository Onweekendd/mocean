import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { FileTypeSelectObjectSchema as FileTypeSelectObjectSchema } from './FileTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FileTypeSelectObjectSchema).optional()
}).strict();
export const FileTypeArgsObjectSchema = makeSchema();
export const FileTypeArgsObjectZodSchema = makeSchema();
