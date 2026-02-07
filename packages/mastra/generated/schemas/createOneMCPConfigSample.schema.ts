import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleSelectObjectSchema as MCPConfigSampleSelectObjectSchema } from './objects/MCPConfigSampleSelect.schema';
import { MCPConfigSampleIncludeObjectSchema as MCPConfigSampleIncludeObjectSchema } from './objects/MCPConfigSampleInclude.schema';
import { MCPConfigSampleCreateInputObjectSchema as MCPConfigSampleCreateInputObjectSchema } from './objects/MCPConfigSampleCreateInput.schema';
import { MCPConfigSampleUncheckedCreateInputObjectSchema as MCPConfigSampleUncheckedCreateInputObjectSchema } from './objects/MCPConfigSampleUncheckedCreateInput.schema';

export const MCPConfigSampleCreateOneSchema: z.ZodType<Prisma.MCPConfigSampleCreateArgs> = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), data: z.union([MCPConfigSampleCreateInputObjectSchema, MCPConfigSampleUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleCreateArgs>;

export const MCPConfigSampleCreateOneZodSchema = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), data: z.union([MCPConfigSampleCreateInputObjectSchema, MCPConfigSampleUncheckedCreateInputObjectSchema]) }).strict();