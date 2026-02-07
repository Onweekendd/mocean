import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerCreateWithoutConfigSampleRelationInput.schema';
import { MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUncheckedCreateWithoutConfigSampleRelationInput.schema';
import { MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectSchema as MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectSchema } from './MCPServerCreateOrConnectWithoutConfigSampleRelationInput.schema';
import { MCPServerUpsertWithoutConfigSampleRelationInputObjectSchema as MCPServerUpsertWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUpsertWithoutConfigSampleRelationInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInputObjectSchema as MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInput.schema';
import { MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema as MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUpdateWithoutConfigSampleRelationInput.schema';
import { MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema as MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUncheckedUpdateWithoutConfigSampleRelationInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectSchema).optional(),
  upsert: z.lazy(() => MCPServerUpsertWithoutConfigSampleRelationInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MCPServerUpdateToOneWithWhereWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUpdateWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutConfigSampleRelationInputObjectSchema)]).optional()
}).strict();
export const MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInput>;
export const MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInputObjectZodSchema = makeSchema();
