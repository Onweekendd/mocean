import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleUpdateManyMutationInputObjectSchema as MCPConfigSampleUpdateManyMutationInputObjectSchema } from './objects/MCPConfigSampleUpdateManyMutationInput.schema';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './objects/MCPConfigSampleWhereInput.schema';

export const MCPConfigSampleUpdateManySchema: z.ZodType<Prisma.MCPConfigSampleUpdateManyArgs> = z.object({ data: MCPConfigSampleUpdateManyMutationInputObjectSchema, where: MCPConfigSampleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleUpdateManyArgs>;

export const MCPConfigSampleUpdateManyZodSchema = z.object({ data: MCPConfigSampleUpdateManyMutationInputObjectSchema, where: MCPConfigSampleWhereInputObjectSchema.optional() }).strict();