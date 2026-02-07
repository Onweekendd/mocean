import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPConfigSampleCreateWithoutServerInputObjectSchema as MCPConfigSampleCreateWithoutServerInputObjectSchema } from './MCPConfigSampleCreateWithoutServerInput.schema';
import { MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema as MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema } from './MCPConfigSampleUncheckedCreateWithoutServerInput.schema';
import { MCPConfigSampleCreateOrConnectWithoutServerInputObjectSchema as MCPConfigSampleCreateOrConnectWithoutServerInputObjectSchema } from './MCPConfigSampleCreateOrConnectWithoutServerInput.schema';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './MCPConfigSampleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPConfigSampleCreateWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPConfigSampleCreateOrConnectWithoutServerInputObjectSchema).optional(),
  connect: z.lazy(() => MCPConfigSampleWhereUniqueInputObjectSchema).optional()
}).strict();
export const MCPConfigSampleUncheckedCreateNestedOneWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleUncheckedCreateNestedOneWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleUncheckedCreateNestedOneWithoutServerInput>;
export const MCPConfigSampleUncheckedCreateNestedOneWithoutServerInputObjectZodSchema = makeSchema();
