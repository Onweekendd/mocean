import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentCreateManyInputObjectSchema as AgentCreateManyInputObjectSchema } from './objects/AgentCreateManyInput.schema';

export const AgentCreateManySchema: z.ZodType<Prisma.AgentCreateManyArgs> = z.object({ data: z.union([ AgentCreateManyInputObjectSchema, z.array(AgentCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.AgentCreateManyArgs>;

export const AgentCreateManyZodSchema = z.object({ data: z.union([ AgentCreateManyInputObjectSchema, z.array(AgentCreateManyInputObjectSchema) ]),  }).strict();