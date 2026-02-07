import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleSelectObjectSchema as MCPConfigSampleSelectObjectSchema } from './objects/MCPConfigSampleSelect.schema';
import { MCPConfigSampleIncludeObjectSchema as MCPConfigSampleIncludeObjectSchema } from './objects/MCPConfigSampleInclude.schema';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './objects/MCPConfigSampleWhereUniqueInput.schema';

export const MCPConfigSampleFindUniqueOrThrowSchema: z.ZodType<Prisma.MCPConfigSampleFindUniqueOrThrowArgs> = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), where: MCPConfigSampleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleFindUniqueOrThrowArgs>;

export const MCPConfigSampleFindUniqueOrThrowZodSchema = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), where: MCPConfigSampleWhereUniqueInputObjectSchema }).strict();