import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './objects/MCPConfigSampleWhereInput.schema';

export const MCPConfigSampleDeleteManySchema: z.ZodType<Prisma.MCPConfigSampleDeleteManyArgs> = z.object({ where: MCPConfigSampleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleDeleteManyArgs>;

export const MCPConfigSampleDeleteManyZodSchema = z.object({ where: MCPConfigSampleWhereInputObjectSchema.optional() }).strict();