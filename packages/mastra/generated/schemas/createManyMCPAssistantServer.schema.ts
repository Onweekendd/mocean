import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerCreateManyInputObjectSchema as MCPAssistantServerCreateManyInputObjectSchema } from './objects/MCPAssistantServerCreateManyInput.schema';

export const MCPAssistantServerCreateManySchema: z.ZodType<Prisma.MCPAssistantServerCreateManyArgs> = z.object({ data: z.union([ MCPAssistantServerCreateManyInputObjectSchema, z.array(MCPAssistantServerCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateManyArgs>;

export const MCPAssistantServerCreateManyZodSchema = z.object({ data: z.union([ MCPAssistantServerCreateManyInputObjectSchema, z.array(MCPAssistantServerCreateManyInputObjectSchema) ]),  }).strict();