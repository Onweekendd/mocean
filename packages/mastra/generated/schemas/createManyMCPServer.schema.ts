import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerCreateManyInputObjectSchema as MCPServerCreateManyInputObjectSchema } from './objects/MCPServerCreateManyInput.schema';

export const MCPServerCreateManySchema: z.ZodType<Prisma.MCPServerCreateManyArgs> = z.object({ data: z.union([ MCPServerCreateManyInputObjectSchema, z.array(MCPServerCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MCPServerCreateManyArgs>;

export const MCPServerCreateManyZodSchema = z.object({ data: z.union([ MCPServerCreateManyInputObjectSchema, z.array(MCPServerCreateManyInputObjectSchema) ]),  }).strict();