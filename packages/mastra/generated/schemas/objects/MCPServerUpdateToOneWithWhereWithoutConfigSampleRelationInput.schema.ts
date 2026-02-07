import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema';
import { MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema as MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUpdateWithoutConfigSampleRelationInput.schema';
import { MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema as MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUncheckedUpdateWithoutConfigSampleRelationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema)])
}).strict();
export const MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInput>;
export const MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInputObjectZodSchema = makeSchema();
