import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MCPPromptWhereUniqueInputObjectSchema: z.ZodType<Prisma.MCPPromptWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptWhereUniqueInput>;
export const MCPPromptWhereUniqueInputObjectZodSchema = makeSchema();
