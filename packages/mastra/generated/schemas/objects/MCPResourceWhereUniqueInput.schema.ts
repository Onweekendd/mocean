import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MCPResourceWhereUniqueInputObjectSchema: z.ZodType<Prisma.MCPResourceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceWhereUniqueInput>;
export const MCPResourceWhereUniqueInputObjectZodSchema = makeSchema();
