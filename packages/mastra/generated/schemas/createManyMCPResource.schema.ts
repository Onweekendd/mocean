import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceCreateManyInputObjectSchema as MCPResourceCreateManyInputObjectSchema } from './objects/MCPResourceCreateManyInput.schema';

export const MCPResourceCreateManySchema: z.ZodType<Prisma.MCPResourceCreateManyArgs> = z.object({ data: z.union([ MCPResourceCreateManyInputObjectSchema, z.array(MCPResourceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MCPResourceCreateManyArgs>;

export const MCPResourceCreateManyZodSchema = z.object({ data: z.union([ MCPResourceCreateManyInputObjectSchema, z.array(MCPResourceCreateManyInputObjectSchema) ]),  }).strict();