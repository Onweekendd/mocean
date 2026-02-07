import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleSelectObjectSchema as MCPConfigSampleSelectObjectSchema } from './objects/MCPConfigSampleSelect.schema';
import { MCPConfigSampleIncludeObjectSchema as MCPConfigSampleIncludeObjectSchema } from './objects/MCPConfigSampleInclude.schema';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './objects/MCPConfigSampleWhereUniqueInput.schema';
import { MCPConfigSampleCreateInputObjectSchema as MCPConfigSampleCreateInputObjectSchema } from './objects/MCPConfigSampleCreateInput.schema';
import { MCPConfigSampleUncheckedCreateInputObjectSchema as MCPConfigSampleUncheckedCreateInputObjectSchema } from './objects/MCPConfigSampleUncheckedCreateInput.schema';
import { MCPConfigSampleUpdateInputObjectSchema as MCPConfigSampleUpdateInputObjectSchema } from './objects/MCPConfigSampleUpdateInput.schema';
import { MCPConfigSampleUncheckedUpdateInputObjectSchema as MCPConfigSampleUncheckedUpdateInputObjectSchema } from './objects/MCPConfigSampleUncheckedUpdateInput.schema';

export const MCPConfigSampleUpsertOneSchema: z.ZodType<Prisma.MCPConfigSampleUpsertArgs> = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), where: MCPConfigSampleWhereUniqueInputObjectSchema, create: z.union([ MCPConfigSampleCreateInputObjectSchema, MCPConfigSampleUncheckedCreateInputObjectSchema ]), update: z.union([ MCPConfigSampleUpdateInputObjectSchema, MCPConfigSampleUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleUpsertArgs>;

export const MCPConfigSampleUpsertOneZodSchema = z.object({ select: MCPConfigSampleSelectObjectSchema.optional(), include: MCPConfigSampleIncludeObjectSchema.optional(), where: MCPConfigSampleWhereUniqueInputObjectSchema, create: z.union([ MCPConfigSampleCreateInputObjectSchema, MCPConfigSampleUncheckedCreateInputObjectSchema ]), update: z.union([ MCPConfigSampleUpdateInputObjectSchema, MCPConfigSampleUncheckedUpdateInputObjectSchema ]) }).strict();