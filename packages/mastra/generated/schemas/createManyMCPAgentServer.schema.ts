import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerCreateManyInputObjectSchema as MCPAgentServerCreateManyInputObjectSchema } from './objects/MCPAgentServerCreateManyInput.schema';

export const MCPAgentServerCreateManySchema: z.ZodType<Prisma.MCPAgentServerCreateManyArgs> = z.object({ data: z.union([ MCPAgentServerCreateManyInputObjectSchema, z.array(MCPAgentServerCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerCreateManyArgs>;

export const MCPAgentServerCreateManyZodSchema = z.object({ data: z.union([ MCPAgentServerCreateManyInputObjectSchema, z.array(MCPAgentServerCreateManyInputObjectSchema) ]),  }).strict();