import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleSelectObjectSchema as MCPConfigSampleSelectObjectSchema } from './objects/MCPConfigSampleSelect.schema';
import { MCPConfigSampleIncludeObjectSchema as MCPConfigSampleIncludeObjectSchema } from './objects/MCPConfigSampleInclude.schema';
import { MCPConfigSampleUpdateInputObjectSchema as MCPConfigSampleUpdateInputObjectSchema } from './objects/MCPConfigSampleUpdateInput.schema';
import { MCPConfigSampleUncheckedUpdateInputObjectSchema as MCPConfigSampleUncheckedUpdateInputObjectSchema } from './objects/MCPConfigSampleUncheckedUpdateInput.schema';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './objects/MCPConfigSampleWhereUniqueInput.schema';

export const MCPConfigSampleUpdateOneSchema: z.ZodType<Prisma.MCPConfigSampleUpdateArgs> = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), data: z.union([MCPConfigSampleUpdateInputObjectSchema, MCPConfigSampleUncheckedUpdateInputObjectSchema]), where: MCPConfigSampleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleUpdateArgs>;

export const MCPConfigSampleUpdateOneZodSchema = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), data: z.union([MCPConfigSampleUpdateInputObjectSchema, MCPConfigSampleUncheckedUpdateInputObjectSchema]), where: MCPConfigSampleWhereUniqueInputObjectSchema }).strict();