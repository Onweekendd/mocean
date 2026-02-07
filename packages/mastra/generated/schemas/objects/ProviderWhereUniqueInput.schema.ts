import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ProviderWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProviderWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderWhereUniqueInput>;
export const ProviderWhereUniqueInputObjectZodSchema = makeSchema();
