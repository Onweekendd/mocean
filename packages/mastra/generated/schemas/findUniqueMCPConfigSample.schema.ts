import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleSelectObjectSchema as MCPConfigSampleSelectObjectSchema } from './objects/MCPConfigSampleSelect.schema';
import { MCPConfigSampleIncludeObjectSchema as MCPConfigSampleIncludeObjectSchema } from './objects/MCPConfigSampleInclude.schema';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './objects/MCPConfigSampleWhereUniqueInput.schema';

export const MCPConfigSampleFindUniqueSchema: z.ZodType<Prisma.MCPConfigSampleFindUniqueArgs> = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), where: MCPConfigSampleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleFindUniqueArgs>;

export const MCPConfigSampleFindUniqueZodSchema = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), where: MCPConfigSampleWhereUniqueInputObjectSchema }).strict();