import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema as MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUpdateWithoutConfigSampleRelationInput.schema';
import { MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema as MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUncheckedUpdateWithoutConfigSampleRelationInput.schema';
import { MCPServerCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerCreateWithoutConfigSampleRelationInput.schema';
import { MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUncheckedCreateWithoutConfigSampleRelationInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPServerCreateWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema)]),
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerUpsertWithoutConfigSampleRelationInputObjectSchema: z.ZodType<Prisma.MCPServerUpsertWithoutConfigSampleRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpsertWithoutConfigSampleRelationInput>;
export const MCPServerUpsertWithoutConfigSampleRelationInputObjectZodSchema = makeSchema();
