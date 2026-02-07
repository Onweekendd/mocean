import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupProviderIdNameCompoundUniqueInputObjectSchema as GroupProviderIdNameCompoundUniqueInputObjectSchema } from './GroupProviderIdNameCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  providerId_name: z.lazy(() => GroupProviderIdNameCompoundUniqueInputObjectSchema).optional()
}).strict();
export const GroupWhereUniqueInputObjectSchema: z.ZodType<Prisma.GroupWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupWhereUniqueInput>;
export const GroupWhereUniqueInputObjectZodSchema = makeSchema();
