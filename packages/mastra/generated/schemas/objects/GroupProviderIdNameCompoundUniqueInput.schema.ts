import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  providerId: z.string(),
  name: z.string()
}).strict();
export const GroupProviderIdNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.GroupProviderIdNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupProviderIdNameCompoundUniqueInput>;
export const GroupProviderIdNameCompoundUniqueInputObjectZodSchema = makeSchema();
