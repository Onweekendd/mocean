import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerCreateWithoutConfigSampleRelationInput.schema';
import { MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema as MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema } from './MCPServerUncheckedCreateWithoutConfigSampleRelationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPServerCreateWithoutConfigSampleRelationInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutConfigSampleRelationInputObjectSchema)])
}).strict();
export const MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectSchema: z.ZodType<Prisma.MCPServerCreateOrConnectWithoutConfigSampleRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateOrConnectWithoutConfigSampleRelationInput>;
export const MCPServerCreateOrConnectWithoutConfigSampleRelationInputObjectZodSchema = makeSchema();
