import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolCreateManyInputObjectSchema as MCPToolCreateManyInputObjectSchema } from './objects/MCPToolCreateManyInput.schema';

export const MCPToolCreateManySchema: z.ZodType<Prisma.MCPToolCreateManyArgs> = z.object({ data: z.union([ MCPToolCreateManyInputObjectSchema, z.array(MCPToolCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MCPToolCreateManyArgs>;

export const MCPToolCreateManyZodSchema = z.object({ data: z.union([ MCPToolCreateManyInputObjectSchema, z.array(MCPToolCreateManyInputObjectSchema) ]),  }).strict();