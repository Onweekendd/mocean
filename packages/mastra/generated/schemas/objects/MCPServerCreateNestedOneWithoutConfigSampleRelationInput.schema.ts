import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerCreateWithoutConfigSampleRelationInput.schema';
import { MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUncheckedCreateWithoutConfigSampleRelationInput.schema';
import { MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectSchema as MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectSchema } from './MCPServerCreateOrConnectWithoutConfigSampleRelationInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const MCPServerCreateNestedOneWithoutConfigSampleRelationInputObjectSchema: z.ZodType<Prisma.MCPServerCreateNestedOneWithoutConfigSampleRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateNestedOneWithoutConfigSampleRelationInput>;
export const MCPServerCreateNestedOneWithoutConfigSampleRelationInputObjectZodSchema = makeSchema();
