import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './MCPConfigSampleWhereUniqueInput.schema';
import { MCPConfigSampleCreateWithoutServerInputObjectSchema as MCPConfigSampleCreateWithoutServerInputObjectSchema } from './MCPConfigSampleCreateWithoutServerInput.schema';
import { MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema as MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema } from './MCPConfigSampleUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPConfigSampleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPConfigSampleCreateWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MCPConfigSampleCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleCreateOrConnectWithoutServerInput>;
export const MCPConfigSampleCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
