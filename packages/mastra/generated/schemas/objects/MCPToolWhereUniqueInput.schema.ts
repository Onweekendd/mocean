import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MCPToolWhereUniqueInputObjectSchema: z.ZodType<Prisma.MCPToolWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolWhereUniqueInput>;
export const MCPToolWhereUniqueInputObjectZodSchema = makeSchema();
