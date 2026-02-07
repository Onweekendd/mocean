import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './MCPConfigSampleWhereInput.schema';
import { MCPConfigSampleUpdateWithoutServerInputObjectSchema as MCPConfigSampleUpdateWithoutServerInputObjectSchema } from './MCPConfigSampleUpdateWithoutServerInput.schema';
import { MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema as MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema } from './MCPConfigSampleUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPConfigSampleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MCPConfigSampleUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const MCPConfigSampleUpdateToOneWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleUpdateToOneWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleUpdateToOneWithWhereWithoutServerInput>;
export const MCPConfigSampleUpdateToOneWithWhereWithoutServerInputObjectZodSchema = makeSchema();
