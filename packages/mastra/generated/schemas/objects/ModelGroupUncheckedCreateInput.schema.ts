import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  groupId: z.string(),
  providerId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ModelGroupUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ModelGroupUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUncheckedCreateInput>;
export const ModelGroupUncheckedCreateInputObjectZodSchema = makeSchema();
