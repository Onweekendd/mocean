import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPConfigSampleUpdateWithoutServerInputObjectSchema as MCPConfigSampleUpdateWithoutServerInputObjectSchema } from './MCPConfigSampleUpdateWithoutServerInput.schema';
import { MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema as MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema } from './MCPConfigSampleUncheckedUpdateWithoutServerInput.schema';
import { MCPConfigSampleCreateWithoutServerInputObjectSchema as MCPConfigSampleCreateWithoutServerInputObjectSchema } from './MCPConfigSampleCreateWithoutServerInput.schema';
import { MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema as MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema } from './MCPConfigSampleUncheckedCreateWithoutServerInput.schema';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './MCPConfigSampleWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MCPConfigSampleUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPConfigSampleCreateWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema)]),
  where: z.lazy(() => MCPConfigSampleWhereInputObjectSchema).optional()
}).strict();
export const MCPConfigSampleUpsertWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleUpsertWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleUpsertWithoutServerInput>;
export const MCPConfigSampleUpsertWithoutServerInputObjectZodSchema = makeSchema();
