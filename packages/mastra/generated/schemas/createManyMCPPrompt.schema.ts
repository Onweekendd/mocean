import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptCreateManyInputObjectSchema as MCPPromptCreateManyInputObjectSchema } from './objects/MCPPromptCreateManyInput.schema';

export const MCPPromptCreateManySchema: z.ZodType<Prisma.MCPPromptCreateManyArgs> = z.object({ data: z.union([ MCPPromptCreateManyInputObjectSchema, z.array(MCPPromptCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MCPPromptCreateManyArgs>;

export const MCPPromptCreateManyZodSchema = z.object({ data: z.union([ MCPPromptCreateManyInputObjectSchema, z.array(MCPPromptCreateManyInputObjectSchema) ]),  }).strict();