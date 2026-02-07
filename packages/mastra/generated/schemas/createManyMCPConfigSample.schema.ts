import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleCreateManyInputObjectSchema as MCPConfigSampleCreateManyInputObjectSchema } from './objects/MCPConfigSampleCreateManyInput.schema';

export const MCPConfigSampleCreateManySchema: z.ZodType<Prisma.MCPConfigSampleCreateManyArgs> = z.object({ data: z.union([ MCPConfigSampleCreateManyInputObjectSchema, z.array(MCPConfigSampleCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleCreateManyArgs>;

export const MCPConfigSampleCreateManyZodSchema = z.object({ data: z.union([ MCPConfigSampleCreateManyInputObjectSchema, z.array(MCPConfigSampleCreateManyInputObjectSchema) ]),  }).strict();